console.log("Script is running");

// Sample list of images. In a real-world scenario, you'd fetch these from a server or directory.
const imageList = [{"name": "buffalo_a_01.jpg", "species": "buffalo", "source": "a", "index": "01" },
{"name": "buffalo_a_02.jpg", "species": "buffalo", "source": "a", "index": "02" },
{"name": "buffalo_a_03.jpg", "species": "buffalo", "source": "a", "index": "03" },
{"name": "bushbuck-F_g_01.jpg", "species": "bushbuck-F", "source": "g", "index": "01" },
{"name": "bushbuck-M_g_01.jpg", "species": "bushbuck-M", "source": "g", "index": "01" },
{"name": "bushbuck_g_01.jpg", "species": "bushbuck", "source": "g", "index": "01" },
{"name": "bushbuck_g_02.jpg", "species": "bushbuck", "source": "g", "index": "02" },
{"name": "bushpig_a_01.jpg", "species": "bushpig", "source": "a", "index": "01" },
{"name": "bushpig_a_02.jpg", "species": "bushpig", "source": "a", "index": "02" },
{"name": "bushpig_a_03.jpg", "species": "bushpig", "source": "a", "index": "03" },
{"name": "bushpig_g_01.jpg", "species": "bushpig", "source": "g", "index": "01" },
{"name": "crocodile_a_01.jpg", "species": "crocodile", "source": "a", "index": "01" },
{"name": "crocodile_a_02.jpg", "species": "crocodile", "source": "a", "index": "02" },
{"name": "duiker_g_01.jpg", "species": "duiker", "source": "g", "index": "01" },
{"name": "duiker_g_02.jpg", "species": "duiker", "source": "g", "index": "02" },
{"name": "duiker_g_03.jpg", "species": "duiker", "source": "g", "index": "03" },
{"name": "ec3_a_01.jpg", "species": "ec3", "source": "a", "index": "01" },
{"name": "eland_a_01.jpg", "species": "eland", "source": "a", "index": "01" },
{"name": "elephant-family_a_01.jpg", "species": "elephant-family", "source": "a", "index": "01" },
{"name": "elephant-family_a_02.jpg", "species": "elephant-family", "source": "a", "index": "02" },
{"name": "elephant-family_a_03.jpg", "species": "elephant-family", "source": "a", "index": "03" },
{"name": "elephant-family_a_04.jpg", "species": "elephant-family", "source": "a", "index": "04" },
{"name": "elephant-family_a_05.jpg", "species": "elephant-family", "source": "a", "index": "05" },
{"name": "elephant_a_01.jpg", "species": "elephant", "source": "a", "index": "01" },
{"name": "elephant_a_02.jpg", "species": "elephant", "source": "a", "index": "02" },
{"name": "elephant_a_03.jpg", "species": "elephant", "source": "a", "index": "03" },
{"name": "elephant_a_04.jpg", "species": "elephant", "source": "a", "index": "04" },
{"name": "elephant_a_05.jpg", "species": "elephant", "source": "a", "index": "05" },
{"name": "elephant_a_06.jpg", "species": "elephant", "source": "a", "index": "06" },
{"name": "elephant_a_07.jpg", "species": "elephant", "source": "a", "index": "07" },
{"name": "elephant_a_08.jpg", "species": "elephant", "source": "a", "index": "08" },
{"name": "elephant_a_09.jpg", "species": "elephant", "source": "a", "index": "09" },
{"name": "elephant_a_10.jpg", "species": "elephant", "source": "a", "index": "10" },
{"name": "elephant_a_11.jpg", "species": "elephant", "source": "a", "index": "11" },
{"name": "giraffe_a_01.jpg", "species": "giraffe", "source": "a", "index": "01" },
{"name": "giraffe_a_02.jpg", "species": "giraffe", "source": "a", "index": "02" },
{"name": "giraffe_a_03.jpg", "species": "giraffe", "source": "a", "index": "03" },
{"name": "giraffe_a_04.jpg", "species": "giraffe", "source": "a", "index": "04" },
{"name": "giraffe_a_05.jpg", "species": "giraffe", "source": "a", "index": "05" },
{"name": "giraffe_a_06.jpg", "species": "giraffe", "source": "a", "index": "06" },
{"name": "ground-horbill_a_01.jpg", "species": "ground-horbill", "source": "a", "index": "01" },
{"name": "ground-hornbill_a_02.jpg", "species": "ground-hornbill", "source": "a", "index": "02" },
{"name": "grysbok_g_01.jpg", "species": "grysbok", "source": "g", "index": "01" },
{"name": "hartebeest_a_01.jpg", "species": "hartebeest", "source": "a", "index": "01" },
{"name": "hartebeest_g_01.jpg", "species": "hartebeest", "source": "g", "index": "01" },
{"name": "hartebeest_g_02.jpg", "species": "hartebeest", "source": "g", "index": "02" },
{"name": "hartebeest_g_03.jpg", "species": "hartebeest", "source": "g", "index": "03" },
{"name": "hippo_a_01.jpg", "species": "hippo", "source": "a", "index": "01" },
{"name": "hippo_a_02.jpg", "species": "hippo", "source": "a", "index": "02" },
{"name": "hippo_a_03.jpg", "species": "hippo", "source": "a", "index": "03" },
{"name": "hippo_a_04.jpg", "species": "hippo", "source": "a", "index": "04" },
{"name": "impala_a_01.jpg", "species": "impala", "source": "a", "index": "01" },
{"name": "impala_a_02.jpg", "species": "impala", "source": "a", "index": "02" },
{"name": "impala_a_03.jpg", "species": "impala", "source": "a", "index": "03" },
{"name": "impala_a_04.jpg", "species": "impala", "source": "a", "index": "04" },
{"name": "impala_a_05.jpg", "species": "impala", "source": "a", "index": "05" },
{"name": "impala_a_06.jpg", "species": "impala", "source": "a", "index": "06" },
{"name": "impala_a_07.jpg", "species": "impala", "source": "a", "index": "07" },
{"name": "kudu-M_g_01.jpg", "species": "kudu-M", "source": "g", "index": "01" },
{"name": "kudu-M_g_02.jpg", "species": "kudu-M", "source": "g", "index": "02" },
{"name": "kudu_a_01.jpg", "species": "kudu", "source": "a", "index": "01" },
{"name": "kudu_a_02.jpg", "species": "kudu", "source": "a", "index": "02" },
{"name": "kudu_a_03.jpg", "species": "kudu", "source": "a", "index": "03" },
{"name": "kudu_g_01.jpg", "species": "kudu", "source": "g", "index": "01" },
{"name": "oryx_g_01.jpg", "species": "oryx", "source": "g", "index": "01" },
{"name": "ostrich_a_01.jpg", "species": "ostrich", "source": "a", "index": "01" },
{"name": "puku_a_01.jpg", "species": "puku", "source": "a", "index": "01" },
{"name": "puku_a_02.jpg", "species": "puku", "source": "a", "index": "02" },
{"name": "red-billed-stork_a_01.jpg", "species": "red-billed-stork", "source": "a", "index": "01" },
{"name": "red-lechwe_a_01.jpg", "species": "red-lechwe", "source": "a", "index": "01" },
{"name": "red-lechwe_a_02.jpg", "species": "red-lechwe", "source": "a", "index": "02" },
{"name": "red-lechwe_a_03.jpg", "species": "red-lechwe", "source": "a", "index": "03" },
{"name": "red-lechwe_a_04.jpg", "species": "red-lechwe", "source": "a", "index": "04" },
{"name": "red-lechwe_a_05.jpg", "species": "red-lechwe", "source": "a", "index": "05" },
{"name": "red-lechwe_a_06.jpg", "species": "red-lechwe", "source": "a", "index": "06" },
{"name": "red-lechwe_a_07.jpg", "species": "red-lechwe", "source": "a", "index": "07" },
{"name": "red-lechwe_a_08.jpg", "species": "red-lechwe", "source": "a", "index": "08" },
{"name": "red-lechwe_a_10.jpg", "species": "red-lechwe", "source": "a", "index": "10" },
{"name": "red-lechwe_a_11.jpg", "species": "red-lechwe", "source": "a", "index": "11" },
{"name": "red-lechwe_g_01.jpg", "species": "red-lechwe", "source": "g", "index": "01" },
{"name": "reedbuck_g_01.jpg", "species": "reedbuck", "source": "g", "index": "01" },
{"name": "reedbuck_g_02.jpg", "species": "reedbuck", "source": "g", "index": "02" },
{"name": "reedbuck_g_03.jpg", "species": "reedbuck", "source": "g", "index": "03" },
{"name": "rhino_a_01.jpg", "species": "rhino", "source": "a", "index": "01" },
{"name": "roan-antelope_a_01.jpg", "species": "roan-antelope", "source": "a", "index": "01" },
{"name": "roan_a_02.jpg", "species": "roan", "source": "a", "index": "02" },
{"name": "roan_a_03.jpg", "species": "roan", "source": "a", "index": "03" },
{"name": "roan_g_01.jpg", "species": "roan", "source": "g", "index": "01" },
{"name": "roan_g_02.jpg", "species": "roan", "source": "g", "index": "02" },
{"name": "sable_a_01.jpg", "species": "sable", "source": "a", "index": "01" },
{"name": "sable_g_01.jpg", "species": "sable", "source": "g", "index": "01" },
{"name": "saddle-billed-stork_a_01.jpg", "species": "saddle-billed-stork", "source": "a", "index": "01" },
{"name": "shoats_a_01.jpg", "species": "shoats", "source": "a", "index": "01" },
{"name": "sitatunga_a_01.jpg", "species": "sitatunga", "source": "a", "index": "01" },
{"name": "steenbok_a_01.jpg", "species": "steenbok", "source": "a", "index": "01" },
{"name": "topi_a_01.jpg", "species": "topi", "source": "a", "index": "01" },
{"name": "topi_g_01.jpg", "species": "topi", "source": "g", "index": "01" },
{"name": "topi_g_02.jpg", "species": "topi", "source": "g", "index": "02" },
{"name": "topi_g_03.jpg", "species": "topi", "source": "g", "index": "03" },
{"name": "warthog_a_01.jpg", "species": "warthog", "source": "a", "index": "01" },
{"name": "warthog_a_02.jpg", "species": "warthog", "source": "a", "index": "02" },
{"name": "warthog_a_04.jpg", "species": "warthog", "source": "a", "index": "04" },
{"name": "warthog_a_05.jpg", "species": "warthog", "source": "a", "index": "05" },
{"name": "warthog_g_01.jpg", "species": "warthog", "source": "g", "index": "01" },
{"name": "warthog_g_02.jpg", "species": "warthog", "source": "g", "index": "02" },
{"name": "waterbuck_a_01.jpg", "species": "waterbuck", "source": "a", "index": "01" },
{"name": "waterbuck_a_02.jpg", "species": "waterbuck", "source": "a", "index": "02" },
{"name": "waterbuck_a_03.jpg", "species": "waterbuck", "source": "a", "index": "03" },
{"name": "waterbuck_g_01.jpg", "species": "waterbuck", "source": "g", "index": "01" },
{"name": "waterbuck_g_02.jpg", "species": "waterbuck", "source": "g", "index": "02" },
{"name": "waterbuck_g_03.jpg", "species": "waterbuck", "source": "g", "index": "03" },
{"name": "waterbuck_g_04.jpg", "species": "waterbuck", "source": "g", "index": "04" },
{"name": "wildebeast_g_01.jpg", "species": "wildebeast", "source": "g", "index": "01" },
{"name": "zebra_a_01.jpg", "species": "zebra", "source": "a", "index": "01" },
{"name": "zebra_a_02.jpg", "species": "zebra", "source": "a", "index": "02" },
{"name": "zebra_a_03.jpg", "species": "zebra", "source": "a", "index": "03" },
{"name": "zebra_a_04.jpg", "species": "zebra", "source": "a", "index": "04" },
{"name": "zebra_a_05.jpg", "species": "zebra", "source": "a", "index": "05" },
{"name": "zebra_a_06.jpg", "species": "zebra", "source": "a", "index": "06" },
{"name": "zebra_a_07.jpg", "species": "zebra", "source": "a", "index": "07" },
{"name": "zebra_a_08.jpg", "species": "zebra", "source": "a", "index": "08" },
{"name": "zebra_a_09.jpg", "species": "zebra", "source": "a", "index": "09" },
{"name": "zebra_a_10.jpg", "species": "zebra", "source": "a", "index": "10" },

]


const speciesList = document.getElementById('speciesList');
const thumbnails = document.getElementById('thumbnails');
const fullImage = document.getElementById('fullImage');

const uniqueSpecies = [...new Set(imageList.map(img => img.species))];
uniqueSpecies.sort();
uniqueSpecies.forEach(species => {
    const li = document.createElement('li');
    li.textContent = species;
    li.addEventListener('click', function() {
        displayThumbnails(species);
    });
    speciesList.appendChild(li);
});

function displayThumbnails(species) {
    thumbnails.innerHTML = '';
    const speciesImages = imageList.filter(img => img.species === species);

    speciesImages.forEach(img => {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');
        thumbnailDiv.style.backgroundImage = `url(images/${img.name})`;
        if (img.source === 'a') {
            thumbnailDiv.style.border = '2px solid red';
        } else if (img.source === 'g') {
            thumbnailDiv.style.border = '2px solid black';
        }
        thumbnailDiv.addEventListener('click', function() {
            displayFullImage(img);
        });
        thumbnails.appendChild(thumbnailDiv);
    });
}

function displayFullImage(img) {
    fullImage.innerHTML = `<img src="images/${img.name}" alt="${img.species}">`;
}

