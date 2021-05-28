var tetxs= [
 "This is my brother, Michael. He is younger than me by 6 years. He is 7 years old. His birthday is on May 14th 2014. He was born at Bangalore, Karnataka",
  "This is my mom, Sarika. She is 40 and a half years old. Her birthday is on June 17th 1980. She was born in Thalaserry, Kerala She used to work as a montessori teacher, but now she is a normal housewife.",
  "This is my dad Arnold. He is 43 years old. His birthday is on December 16th 1978. He was bon in Mumbai, Mahrashtra. He works as an IT proffesional in TCS",
  "These are my grandparents from my mothers side. Ther'e names are Radhakrishnan Nair and Lily Shobna. My grand father was born in 20th October 1953. He is 67 and half years at Thriruvangad, Thallasery, Kerala. My grandmother was born on May 16th 1956 at Calicut or KozhiKode, Kerala. She is 65 years old. My grandfather from my mothers side  used to work as a Station Master in Eddakad, Kerala",
  "This my grandfather from my fathers side. His name is Kunhiananad Nair. He was born on 15th August 1937 at Kodiyeri, Thallasery, Kerala and settled in Mumbai, Maharashtra. He is 84 years old."];

var images=[
 "brother.JPG",
 "mother.jpg",
 "father.jpg",
 "grandparents.jpg",
 "grandfather.jpg"];

  var i= 0;
  function nextpage() {
    i++;
    var number_family_members_in_array = 4
    if (i>number_family_members_in_array) {
      i=0;
    }
    var updatedImages = images[i];
    var updatedText = tetxs[i];
    document.getElementById("image1").src= updatedImages;
    document.getElementById("text1").innerHTML= updatedText;
  }
