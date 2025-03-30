import { ref, onBeforeUnmount } from 'vue';

export function useCamera() {
    const video = ref(null);
    const canvas = ref(null);
    const stream = ref(null);
    const animationFrameId = ref(null);
    const error = ref(null);

    const constraints = {
    audio: false,
    video: { 
        width: { ideal: 720 },
        height: { ideal: 720 },
        facingMode: 'environment'
    }
    };

    const startCamera = async () => {
    try {
        stream.value = await navigator.mediaDevices.getUserMedia(constraints);
        video.value.srcObject = stream.value;
        await video.value.play();
        startDrawing();
    } catch (err) {
        error.value = err;
        console.error('Camera error:', err);
    }
    };

    const startDrawing = () => {
    const draw = () => {
        if (video.value && canvas.value) {
        const ctx = canvas.value.getContext('2d');
        ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
        animationFrameId.value = requestAnimationFrame(draw);
        }
    };
    draw();
    };

    const stopCamera = () => {
    if (animationFrameId.value) {
        cancelAnimationFrame(animationFrameId.value);
    }
    if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop());
    }
    };

    const captureImage = () => {
    if (!canvas.value) return null;
    return canvas.value.toDataURL('image/png', 0.9);
    };

    onBeforeUnmount(() => {
    stopCamera();
    });

    return {
    video,
    canvas,
    error,
    constraints,
    startCamera,
    stopCamera,
    captureImage
    };
}