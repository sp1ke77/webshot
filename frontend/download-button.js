const capture = () => {
    $(document).ready(function() {
    $("#DownloadButton").click(function() {
      domtoimage.toBlob(document.getElementById('resultImg')).then(function (blob) {
        window.saveAs(blob, 'output.png');
  });
});
  });
}