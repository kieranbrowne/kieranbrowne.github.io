  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
      ctx.fillStyle = "rgba(140,140,140,0.05)";
      ctx.fillStyle = "rgba(240,240,240,0.05)";

  var drawings = _.shuffle(_.range(7));
  console.log(drawings);

  function returnFloat(element){
      return parseFloat(element,10);
  }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

  function nchunks(arr,n) {
    // console.log(arr.length / n);
    var s = Math.floor(arr.length / n);
    var range = Array.apply(null, Array(n)).map(function (_, i) {return i;});
    return range.map(
        function (part) {
          return arr.slice(part*s,(part+1)*s);
        });
  }

  function pencilDraw(line) {
    // console.log(line.split(' ').map(parseFloat));
    var [x,y,d] = line.split(' ').map(parseFloat);

      for(var i=0; i<12; i++) 
        ctx.fillRect(
            x*8 +Math.random()*2.0,
            y*8 +Math.random()*2.0
            ,0.3,0.3);
  }

  function drawSlowly(lines,ctx) {

      pencilDraw(lines.shift());
      if(lines.length > 0)
        setTimeout(function() {
          drawSlowly(lines,ctx);
        },30);
      else {
        clearCanvas();
        startDrawing();
      }
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function startDrawing() {
      jQuery.get('/drawings/'+drawings.pop(), function(data) {
        lines = data.split('\n');
        ctx.fillStyle = "rgba(100,100,100,0.4)";
        //drawSlowly(lines);
        nchunks(lines,3).map(drawSlowly);
      });
  }

  startDrawing();

