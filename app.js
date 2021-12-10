let one_sert =  Array.from(document.querySelectorAll('.one_sert')),
    close_sert= Array.from(document.querySelectorAll('.close_sert')),
    images_box= Array.from(document.querySelectorAll('.images-box')),
    images_bcgr = document.querySelector('.images_bcgr');

    one_sert.forEach(function(item, i) {
    
            item.addEventListener('click', function(e) {
              this.classList.add('full_size_sert');
              images_bcgr.classList.add('images_bcgr_active')       
              images_box[i].classList.add('images-box_active')       
              close_sert[i].classList.add('close_sert_active')       
         }, false);

    });
    close_sert.forEach(function(item, i) {
    
            item.addEventListener('click', function(e) {
            images_box[i].classList.remove('images-box_active')       
            one_sert[i].classList.remove('full_size_sert')
            images_bcgr.classList.remove('images_bcgr_active')
            close_sert[i].classList.remove('close_sert_active')     
         }, false);

    });
    images_bcgr.addEventListener('click', function(e) {
      close_sert.forEach(function(item, i) {
        images_box[i].classList.remove('images-box_active')       
        one_sert[i].classList.remove('full_size_sert')
        images_bcgr.classList.remove('images_bcgr_active')
        close_sert[i].classList.remove('close_sert_active')  
      },)
    });