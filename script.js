const perfumeData = {
    "Amber No.5": {
      description: `
      Concentration: Eau de Parfum<br><br>
      Olfactory Family: Oriental Woody<br>
      Top Notes: Bergamot, Pink Pepper<br>
      Heart Notes: Amber, Rose<br>
      Base Notes: Vanilla, Sandalwood<br><br>
      Longevity: 8–10 hours<br>
      Sillage: Moderate<br><br>
      A warm and sensual fragrance designed for elegant evenings.
      `
    },
    "Rose Velvet": {
      description: `
      Concentration: Eau de Parfum<br><br>
      Olfactory Family: Floral Musk<br>
      Top Notes: Lychee, Pear<br>
      Heart Notes: Rose, Peony<br>
      Base Notes: Musk, Cashmere Wood<br><br>
      Soft, romantic, and timeless.
      `
    },
    "Midnight Oud": {
      description: `
      Concentration: Parfum<br><br>
      Olfactory Family: Woody Oriental<br>
      Top Notes: Saffron<br>
      Heart Notes: Oud, Patchouli<br>
      Base Notes: Leather, Amber<br><br>
      Deep, mysterious, and powerful.
      `
    }
  };
  
  function openModal(name) {
    document.getElementById("modal-title").innerText = name;
    document.getElementById("modal-description").innerHTML = perfumeData[name].description;
    document.getElementById("modal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }