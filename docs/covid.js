function AppViewModel() {
  var self = this;


  self.variants = ko.observable({
      "B.1.1": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "",
            "active": true,
            "mutations": [
              "D614G"
            ]
          }
        ]
      }
    })

  self.activeList = ko.observableArray([])

  self.mutations = ko.observableArray([])

  self.Array1 = ko.observableArray([])
  self.Array2 = ko.observableArray([])
  self.Array3 = ko.observableArray([])
  self.Array4 = ko.observableArray([])
  self.Array5 = ko.observableArray([])

  $.ajax({
    url: "variants.txt",
  })
  .done(function( data ) {
    // console.log(data)
    self.variants(JSON.parse(data))

    //build array of possible mutations
    const vars = Object.keys(self.variants())
    vars.forEach(x => {
      self.variants()[x].sublineages.forEach(lineage => {
        lineage.mutations.forEach(mutation => {
          const stripped_name = mutation.replaceAll(/[()]/g,'')
          const ind = self.mutations().findIndex(mut => mut.name === stripped_name)
          if(ind < 0) {
            self.mutations().push({name:stripped_name, selected: ko.observable(false)})
          }
        })
      })
    })

    self.mutations().sort((a,b) => {
      // console.log(a,b);
      var regex = /\d+/g
      var a_num = a.name.match(regex)
      var b_num = b.name.match(regex)
      // console.log(a,a_num, b, b_num)
      return parseInt(a_num[0]) - parseInt(b_num[0])
  })

    self.activeList(Object.keys(self.variants())
    .reduce((x, variant) => {
        self.variants()[variant].sublineages.forEach(lineage => {
            x.push({name:variant + "(" + lineage.name + ")", status:lineage.active})
        })
        return x
    },[]))

    self.Array1(self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num < 200
     }))

     self.Array2(self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 200 && num < 400
     }))

     self.Array3(self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 400 && num < 600
     }))

     self.Array4(self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 600 && num < 800
     }))

     self.Array5(self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 800
     }))

  });
    

    self.bestFit = ko.observableArray([]);


    //when a button is clicked, update its selected status
    self.toggleSelected = (mutation) => {
        mutation.selected(!mutation.selected())

        if(mutation.group) {
            self.mutations().forEach( item => {
                if (item.name != mutation.name && item.group == mutation.group)
                    item.selected(false)
            })
        }

        selections = self.getSelected()
        maxScore = 0;
        maxVariants = [];
        Object.keys(self.variants()).forEach(variant => {
            self.variants()[variant].sublineages.forEach(lineage => {
                // if(self.activeList()[variant + "(" + lineage.name + ")"].status) {
                if(self.activeList().filter(check => check.name === variant + "(" + lineage.name + ")")[0].status) {
                    tempScore = self.getScore(selections,lineage.mutations)
                    display = variant + " "  + self.variants()[variant].WHO + " (" + lineage.name + ")" 
                    if(tempScore > maxScore) {
                        maxScore = tempScore
                        maxVariants = [{display:display, lineage:lineage}]
                    } else if(tempScore == maxScore && maxScore > 0) {
                        maxVariants.push({display:display, lineage:lineage})
                    }
                }
            })
        })

        // console.log("Best fit:", maxVariants)
        self.bestFit(maxVariants)
    }

    self.getSelected = () => {
        result = []
        self.mutations().forEach( item => {
            if(item.selected()) {
                result.push(item.name)
            }
        })

        return result
    }

    self.getScore = (selections, variant) => {
        score = 0

        variant.forEach(item => {
          index = selections.indexOf(item.replaceAll(/[()]/g,''))
          if(index >= 0){
            score++
          }
        })

        return score
    }

    self.showAcc = ko.observable(false)

    self.toggleAcc = () => {
        self.showAcc(!self.showAcc())
    }

    self.accStatus = ko.pureComputed(function() {
        return self.showAcc() ? "show" : "collapse"
    })

    console.log("Knockout lodaed")

    

}


$(document).ready(function() {
    ko.applyBindings(new AppViewModel()); 
});