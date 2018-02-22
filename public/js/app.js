// navigator.getUserMedia = ( navigator.getUserMedia ||
//                        navigator.webkitGetUserMedia ||
//                        navigator.mozGetUserMedia ||
//                        navigator.msGetUserMedia);
//
// navigator.getUserMedia (
//
//        // constraints
//        {
//           video: true,
//           audio: false
//        },
//        function(localMediaStream) {
//           var video = document.querySelector('video');
//           video.src = window.URL.createObjectURL(localMediaStream);
//           console.log('camara encendida');
//        },
//
//        function(err) {
//         console.log(" Ocurrió el siguiente error: " + err);
//        }
//
// );
