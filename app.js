let para1 = document.getElementById('p1');
let span1 = 5;
let span2 = 12;
let spanResult = document.getElementById('result');

spanResult.innerHTML = (span1 === 5 && span2 === 12) ? (span1 + span2).toString() : (span2 - span1).toString();

para1.innerHTML = (span2 - span1 <= 0) ? para1.innerHTML = "Le résultat moins 10 est strictement inférieur à 0" : para1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at corporis culpa exercitationem hic vel\n" +
    "        vero. Ad nemo provident ut! Ad aliquam doloribus molestiae necessitatibus officiis repellendus\n" +
    "        repudiandae vel. Quo?";