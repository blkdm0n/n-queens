hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      var c, r;
      var i;
      var n = this.rows().length - 1;
      var count = 0;
      if(minorDiagonalColumnIndexAtFirstRow >= this.rows().length){
        r = (minorDiagonalColumnIndexAtFirstRow - this.rows().length);
        c = n;
        i = r;
        var row = this.rows();

        for(i; i < this.rows().length ; i++) {
          if(row[r][c] === 1){
            count++;
            if(count > 1) {
              return true;
            }
          }
          c--;
          r++;
        }
      } else if (minorDiagonalColumnIndexAtFirstRow > 0){
        c = minorDiagonalColumnIndexAtFirstRow -1;
        r = 0;
        i = minorDiagonalColumnIndexAtFirstRow;
        var row = this.rows();
        for(i; i > 0; i--) {
          if(row[r][c] === 1){
            count++;
            if(count > 1) {
              return true;
            }
          }
          c--;
          r++;
        }
      } else{
        r = 0;
        c = n;
        i = 0;
        var row = this.rows();
        for(i; i < this.rows().length; i++) {
          if(row[r][c] === 1){
            count++;
            if(count > 1) {
              return true;
            }
          }
          c--;
          r++;
        }
      }
      return false; // fixme
    }