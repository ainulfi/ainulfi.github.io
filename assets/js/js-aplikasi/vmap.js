 // // list region indonesia (wil binaan)
//         // path07 : bengkulu
//         // path08 : lampung
//         // path11 : dki jakarta
//         // path12 : jabar
//         // path13 : jateng
//         // path14 : banten
//         // path15 : jatim
//         // path16 : diy
//         // path23 : kaltim
//         // path24 : kaltara
//         // path33 : papua
//         // path34 : papua barat
//         //========================//

 var map;

 // Get the modal
var modal = document.getElementById("varyingModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

 function touch_detect() {
        return 'ontouchstart' in window || 'onmsgesturechange' in window || navigator.msMaxTouchPoints > 0;
      }

      jQuery(document).ready(function () {

        // Store currentRegion
        var currentRegion = 'path12';

        // List of Regions we'll let clicks through for
        var enabledRegions = ['path07', 'path08', 'path11','path12', 'path13', 'path14',
                  'path16', 'path23','path24', 'path33', 'path34'];

        map = jQuery('#vmap').vectorMap({
          map: 'indonesia_id',
          enableZoom: true,
          showTooltip: true,
          selectedColor: '#FAB905',
          selectedRegions: '',
          hoverColor: '#FAB905',
          colors: {
            path07: '#1D05F5',
            path08: '#1D05F5',
            path11: '#1D05F5',
            path12: '#1D05F5',
            path13: '#1D05F5',
            path14: '#1D05F5',
            path16: '#1D05F5',
            path23: '#1D05F5',
            path24: '#1D05F5',
            path33: '#1D05F5',
            path34: '#1D05F5'
          },
          onRegionClick: function(event, code, region){
            // Check if this is an Enabled Region, and not the current selected on
            if(enabledRegions.indexOf(code) === -1 || currentRegion === code){
              // Not an Enabled Region
              event.preventDefault();
            } else {
              // Enabled Region. Update Newly Selected Region.
              
             // we're not on a mobile device, handle the click
                // var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                // alert(message);
              currentRegion = code;
              if (!touch_detect()) {
                if (code =='path07') { 
                    $('#bengkuluModal').modal('show');
                    currentRegion = code;
                    // window.open("www.google.com");
                  }
                else if (code =='path08') { 
                    $('#lampungModal').modal('show');
                    currentRegion = code;
                  }
                else if (code =='path11') { 
                    $('#jakartaModal').modal('show');
                  }
                else if (code =='path12') { 
                    $('#jabarModal').modal('show');
                  }
                else if (code =='path13') { 
                    $('#jatengModal').modal('show');
                  }
                else if (code =='path14') { 
                    $('#bantenModal').modal('show');
                  }
                else if (code =='path16') { 
                    $('#yogyaModal').modal('show');
                  }
                else if (code =='path23') { 
                    $('#kaltimModal').modal('show');
                  }
                else if (code =='path24') { 
                    $('#kaltaraModal').modal('show');
                  }
                else if (code =='path33') { 
                    $('#papuaModal').modal('show');
                  }
                else { 
                    $('#papuabaratModal').modal('show');
                  }
              }
            }
          },
          onRegionOver: function (event, code, region) {
            if (touch_detect()) {
              /// we're not on a mobile device, handle the click
              var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
              alert(message);
            }
          },
          onRegionSelect: function(event, code, region){
            // console.log(map.selectedRegions);
            // Check if this is an Enabled Region, and not the current selected on
            if(enabledRegions.indexOf(code) === -1 || currentRegion === code){
              // Not an Enabled Region
              event.preventDefault();
            } else {
              // Enabled Region. Update Newly Selected Region.
              
             // we're not on a mobile device, handle the click
                // var message = 'You clicked "' + region + '" which has the code: ' + code.toUpperCase();
                // alert(message);
              currentRegion = code;
              if (!touch_detect()) {
                if (code =='path07') { 
                    $('#bengkuluModal').modal('show');
                    currentRegion = code;
                    // window.open("www.google.com");
                  }
                else if (code =='path08') { 
                    $('#lampungModal').modal('show');
                    currentRegion = code;
                  }
                else if (code =='path11') { 
                    $('#jakartaModal').modal('show');
                  }
                else if (code =='path12') { 
                    $('#jabarModal').modal('show');
                  }
                else if (code =='path13') { 
                    $('#jatengModal').modal('show');
                  }
                else if (code =='path14') { 
                    $('#bantenModal').modal('show');
                  }
                else if (code =='path16') { 
                    $('#yogyaModal').modal('show');
                  }
                else if (code =='path23') { 
                    $('#kaltimModal').modal('show');
                  }
                else if (code =='path24') { 
                    $('#kaltaraModal').modal('show');
                  }
                else if (code =='path33') { 
                    $('#papuaModal').modal('show');
                  }
                else { 
                    $('#papuabaratModal').modal('show');
                  }
              }
            }
          },
          onLabelShow: function(event, label, code){
            if(enabledRegions.indexOf(code) === -1){
              event.preventDefault();
            }
          }
        });
      });