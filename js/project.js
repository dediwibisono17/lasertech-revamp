$.ajax({
    url: '/digitalmint/js/project.json',
    type: 'GET',
    success: function(response) {
        console.log(response);
        var a;
        for (a = 0; a < response.length; a++) {
            $(".project").append(`
            <div class="col-md-3 col-6">
                <div class="card_">
                    <div class="card__circle">
                        <div class="image image-data" data-toggle="modal" data-target="#logo" data-help="${response[a].id - 1}">
                            <img src="${response[a].img}" alt="${response[a].title}" title="${response[a].title}" loading="lazy">
                        </div>
                    </div>
                    
                </div>
            </div>
            `)

            $("#logo .modal-body").html("")
            $(".image-data[data-target='#logo']").on('click', function() {
                var data = $(this).attr("data-help");

                $("#logo .modal-content").html(`
                    <div class="modal-body">
                        <h3 class="title-purple font-medium text-center">${response[data].title}</h3>
                        <div class="tags">${response[data].category}</div>
                        <br>
                        <div>
                            <p class="font-std">${response[data].desc}</p>
                            <a class="font-std" href="${response[data].url}" target="_blank">Link Website</a>
                            </div>
                        <button type="button" class="btn btn-light float-right" data-dismiss="modal">Close</button>
                    </div>
                `);

                var length = response[data].strategy;
                var a
                for (a = 0; a < length.length; a++) {
                    var value = length[a];
                    // console.log(value);
                    $(".lala").append("<li>" + value + "</li>")
                }

            })
        }
    }
})

$(".hamburger").click(() => {
    $(".menu-menu").slideToggle()
})