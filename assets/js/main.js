const helpers = {
  join: function (context, hash) {
    return context.join(hash.delimiter || ', ');
  },
  getFullDate: function (yyyyMM) {
    if (yyyyMM === "Present") return yyyyMM;
    const [year, month] = yyyyMM.split('-');
    const date = new Date(year, month - 1);
    const monthName = date.toLocaleString('default', { month: 'long' });
    return `${monthName}, ${year}`;
  }
};

Handlebars.registerHelper(helpers);

// Load JSON data and render template
fetch('assets/data/me.json')
  .then(response => response.json())
  .then(data => {
    const template = Handlebars.compile(document.documentElement.innerHTML);
    document.body.innerHTML = template(data);
    document.getElementById("content").style.display = "block";
  });