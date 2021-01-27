const capture = () => {
    const body = document.querySelector('body');
    body.id = 'capture';
    html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas);
    }).then(() => {
      var canvas = document.querySelector('canvas');
      canvas.style.display = 'none';
      var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      var a = document.createElement("a");
      a.setAttribute('download', websiteAdress.value.replace(/\./g, '') + ".png");
      a.setAttribute('href', image);
      a.click();
    });
  };
  
  const download = document.getElementById('DownloadButton');
  download.addEventListener('click', capture)