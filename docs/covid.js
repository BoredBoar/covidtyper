function AppViewModel() {

    var self = this;
    //have to make selected an observable so that UI is auto-updated
    self.mutations = ko.observableArray([
      {name:"L5F", selected: ko.observable(false)},
      {name:"P9L", selected: ko.observable(false)},
      {name:"S12F", selected: ko.observable(false)},
      {name:"S13I", selected: ko.observable(false)},
      {name:"L18F", selected: ko.observable(false)},
      {name:"T19R", selected: ko.observable(false)},
      {name:"T20N", selected: ko.observable(false)},
      {name:"P26S", selected: ko.observable(false)},
      {name:"Q52R", selected: ko.observable(false)},
      {name:"H66D", selected: ko.observable(false)},
      {name:"A67V", selected: ko.observable(false)},
      {name:"H69del", selected: ko.observable(false)},
      {name:"V70del", selected: ko.observable(false)},
      {name:"V70F", selected: ko.observable(false)},
      {name:"G75V", selected: ko.observable(false)},
      {name:"T76I", selected: ko.observable(false)},
      {name:"D80A", selected: ko.observable(false)},
      {name:"D80G", selected: ko.observable(false)},
      {name:"T95I", selected: ko.observable(false)},
      {name:"T95I", selected: ko.observable(false)},
      {name:"V126A", selected: ko.observable(false)},
      {name:"C136F", selected: ko.observable(false)},
      {name:"D138Y", selected: ko.observable(false)},
      {name:"L141del", selected: ko.observable(false)},
      {name:"G142del", selected: ko.observable(false)},
      {name:"G142G", selected: ko.observable(false)},
      {name:"G142D", selected: ko.observable(false)},
      {name:"V143del", selected: ko.observable(false)},
      {name:"Y144del", selected: ko.observable(false)},
      {name:"Y144T/S", selected: ko.observable(false)},
      {name:"Y145D", selected: ko.observable(false)},
      {name:"Y145H", selected: ko.observable(false)},
      {name:"Y145S/N", selected: ko.observable(false)},
      {name:"ins146N", selected: ko.observable(false)},
      {name:"W152C", selected: ko.observable(false)},
      {name:"W152R", selected: ko.observable(false)},
      {name:"E156del", selected: ko.observable(false)},
      {name:"F157S", selected: ko.observable(false)},
      {name:"F157del", selected: ko.observable(false)},
      {name:"R158G", selected: ko.observable(false)},
      {name:"E178H", selected: ko.observable(false)},
      {name:"R190S", selected: ko.observable(false)},
      {name:"I210T", selected: ko.observable(false)},
      {name:"N211del", selected: ko.observable(false)},
      {name:"L212I", selected: ko.observable(false)},
      {name:"ins214EPE", selected: ko.observable(false)},
      {name:"D215G", selected: ko.observable(false)},
      {name:"A222V", selected: ko.observable(false)},
      {name:"L241del", selected: ko.observable(false)},
      {name:"D242", selected: ko.observable(false)},
      {name:"L242del", selected: ko.observable(false)},
      {name:"D243", selected: ko.observable(false)},
      {name:"A243del", selected: ko.observable(false)},
      {name:"D244", selected: ko.observable(false)},
      {name:"L244del", selected: ko.observable(false)},
      {name:"H245Y", selected: ko.observable(false)},
      {name:"R246del", selected: ko.observable(false)},
      {name:"R246N", selected: ko.observable(false)},
      {name:"S247del", selected: ko.observable(false)},
      {name:"Y248del", selected: ko.observable(false)},
      {name:"L249del", selected: ko.observable(false)},
      {name:"T250del", selected: ko.observable(false)},
      {name:"P251del", selected: ko.observable(false)},
      {name:"G252del", selected: ko.observable(false)},
      {name:"D253G", selected: ko.observable(false)},
      {name:"D253del", selected: ko.observable(false)},
      {name:"W258L", selected: ko.observable(false)},
      {name:"F306L", selected: ko.observable(false)},
      {name:"G339D", selected: ko.observable(false)},
      {name:"E346K", selected: ko.observable(false)},
      {name:"E346S", selected: ko.observable(false)},
      {name:"S371L", selected: ko.observable(false)},
      {name:"S373P", selected: ko.observable(false)},
      {name:"S375F", selected: ko.observable(false)},
      {name:"P384L", selected: ko.observable(false)},
      {name:"K417N", selected: ko.observable(false)},
      {name:"K417N/T", selected: ko.observable(false)},
      {name:"N439K", selected: ko.observable(false)},
      {name:"N440K", selected: ko.observable(false)},
      {name:"G446S", selected: ko.observable(false)},
      {name:"Y449H", selected: ko.observable(false)},
      {name:"L452R", selected: ko.observable(false)},
      {name:"L452R", selected: ko.observable(false)},
      {name:"L452Q", selected: ko.observable(false)},
      {name:"Y453F", selected: ko.observable(false)},
      {name:"S477N", selected: ko.observable(false)},
      {name:"S477R", selected: ko.observable(false)},
      {name:"S477N", selected: ko.observable(false)},
      {name:"T478K", selected: ko.observable(false)},
      {name:"V483A", selected: ko.observable(false)},
      {name:"E484K", selected: ko.observable(false)},
      {name:"E484A", selected: ko.observable(false)},
      {name:"E484K", selected: ko.observable(false)},
      {name:"E484Q", selected: ko.observable(false)},
      {name:"F490S", selected: ko.observable(false)},
      {name:"F490S", selected: ko.observable(false)},
      {name:"Q493R", selected: ko.observable(false)},
      {name:"S494P", selected: ko.observable(false)},
      {name:"G496S", selected: ko.observable(false)},
      {name:"Q498R", selected: ko.observable(false)},
      {name:"N501Y", selected: ko.observable(false)},
      {name:"N501Y/T", selected: ko.observable(false)},
      {name:"Y505H", selected: ko.observable(false)},
      {name:"E516Q", selected: ko.observable(false)},
      {name:"T547K", selected: ko.observable(false)},
      {name:"F565L", selected: ko.observable(false)},
      {name:"A570D", selected: ko.observable(false)},
      {name:"G593G", selected: ko.observable(false)},
      {name:"Q613H", selected: ko.observable(false)},
      {name:"D614G", selected: ko.observable(false)},
      {name:"H655Y", selected: ko.observable(false)},
      {name:"G669S", selected: ko.observable(false)},
      {name:"Q677H", selected: ko.observable(false)},
      {name:"Q677H", selected: ko.observable(false)},
      {name:"N679K", selected: ko.observable(false)},
      {name:"P681H", selected: ko.observable(false)},
      {name:"P681R", selected: ko.observable(false)},
      {name:"P681H", selected: ko.observable(false)},
      {name:"A701V", selected: ko.observable(false)},
      {name:"T716I", selected: ko.observable(false)},
      {name:"T732A", selected: ko.observable(false)},
      {name:"N764K", selected: ko.observable(false)},
      {name:"G769V", selected: ko.observable(false)},
      {name:"E780A", selected: ko.observable(false)},
      {name:"D796Y", selected: ko.observable(false)},
      {name:"D796H", selected: ko.observable(false)},
      {name:"D839V", selected: ko.observable(false)},
      {name:"N856K", selected: ko.observable(false)},
      {name:"T859N", selected: ko.observable(false)},
      {name:"T859N", selected: ko.observable(false)},
      {name:"T859I", selected: ko.observable(false)},
      {name:"S875S", selected: ko.observable(false)},
      {name:"F888L", selected: ko.observable(false)},
      {name:"A899S", selected: ko.observable(false)},
      {name:"D936N", selected: ko.observable(false)},
      {name:"Q939F", selected: ko.observable(false)},
      {name:"Q949R", selected: ko.observable(false)},
      {name:"D950H", selected: ko.observable(false)},
      {name:"D950N", selected: ko.observable(false)},
      {name:"Q957R", selected: ko.observable(false)},
      {name:"N969K", selected: ko.observable(false)},
      {name:"L981F", selected: ko.observable(false)},
      {name:"S982A", selected: ko.observable(false)},
      {name:"T1027I", selected: ko.observable(false)},
      {name:"Q1071H", selected: ko.observable(false)},
      {name:"E1092K", selected: ko.observable(false)},
      {name:"H1101D", selected: ko.observable(false)},
      {name:"H1101Y", selected: ko.observable(false)},
      {name:"D1118H", selected: ko.observable(false)},
      {name:"V1176F", selected: ko.observable(false)},
      {name:"V1176F", selected: ko.observable(false)},
      {name:"D1183Y", selected: ko.observable(false)},
      {name:"N1187D", selected: ko.observable(false)},
      {name:"K1191N", selected: ko.observable(false)}
     ])

     self.Array1 = self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num < 200
     })

     self.Array2 = self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 200 && num < 400
     })

     self.Array3 = self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 400 && num < 600
     })

     self.Array4 = self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 600 && num < 800
     })

     self.Array5 = self.mutations().filter(mut => {
      var regex = /\d+/g
      var num = mut.name.match(regex)
      return num >= 800
     })

     self.variants = 
     {
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
      },
      "B.1.1.7": {
        "Location": "UK",
        "WHO": "Alpha",
        "NEXT": "20I/501Y.V1",
        "sublineages": [
          {
            "name": "B.1.1.7",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "(E178H)",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H",
              "(K1191N)"
            ]
          },
          {
            "name": "B.1.1.7+E484K",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "E484K",
              "N501Y",
              "D614G",
              "P681H",
              "T716I",
              "D1118H"
            ]
          },
          {
            "name": "B.1.1.7+L452R",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "L452R",
              "N501Y",
              "D614G",
              "P681H",
              "T716I",
              "D1118H"
            ]
          },
          {
            "name": "B.1.1.7+S494P",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "S494P",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "D1118H"
            ]
          },
          {
            "name": "Q1",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q2",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q3",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q4",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681R",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q5",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q6",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q7",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "P681H",
              "T716I",
              "S982A",
              "D1118H"
            ]
          },
          {
            "name": "Q8",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "Y144del",
              "N501Y",
              "A570D",
              "D614G",
              "D1118H"
            ]
          }
        ]
      },
      "B.1.1.529": {
        "Location": "South Africa",
        "WHO": "Omicron",
        "NEXT": "21K",
        "sublineages": [
          {
            "name": "B.1.1.529",
            "active": true,
            "mutations": [
              "A67V",
              "H69del",
              "V70del",
              "T95I",
              "G142del",
              "V143del",
              "Y144del",
              "Y145D",
              "N211del",
              "L212I",
              "ins214EPE",
              "G339D",
              "S371L",
              "S373P",
              "S375F",
              "K417N",
              "N440K",
              "G446S",
              "S477N",
              "T478K",
              "E484A",
              "Q493R",
              "G496S",
              "Q498R",
              "N501Y",
              "Y505H",
              "T547K",
              "D614G",
              "H655Y",
              "N679K",
              "P681H",
              "N764K",
              "D796Y",
              "N856K",
              "N969K",
              "L981F"
            ]
          }
        ]
      },
      "B.1.351": {
        "Location": "South Africa",
        "WHO": "Beta",
        "NEXT": "20H/501Y.V2",
        "sublineages": [
          {
            "name": "B.1.351",
            "active": true,
            "mutations": [
              "D80A",
              "D215G",
              "D242",
              "D243",
              "D244",
              "K417N",
              "E484K",
              "(F490S)",
              "N501Y/T",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351+E516Q",
            "active": true,
            "mutations": [
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "E516Q",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351+L18F",
            "active": true,
            "mutations": [
              "L18F",
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351+P384L",
            "active": true,
            "mutations": [
              "D80A",
              "D215G",
              "P384L",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351.2",
            "active": true,
            "mutations": [
              "L18F",
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351.3",
            "active": true,
            "mutations": [
              "L18F",
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351.4",
            "active": true,
            "mutations": [
              "L18F",
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          },
          {
            "name": "B.1.351.5",
            "active": true,
            "mutations": [
              "L18F",
              "D80A",
              "D215G",
              "K417N",
              "E484K",
              "N501Y",
              "D614G",
              "A701V"
            ]
          }
        ]
      },
      "B.1.375": {
        "Location": "",
        "WHO": "",
        "NEXT": "20C",
        "sublineages": [
          {
            "name": "B.1.375",
            "active": true,
            "mutations": [
              "H69del",
              "V70del",
              "(S477R)",
              "D614G"
            ]
          }
        ]
      },
      "B.1.427": {
        "Location": "US (California)",
        "WHO": "Epsilon",
        "NEXT": "20C/S:452R",
        "sublineages": [
          {
            "name": "B.1.427",
            "active": true,
            "mutations": [
              "S13I",
              "W152C",
              "L452R",
              "(Y453F)",
              "D614G",
              "D1183Y"
            ]
          }
        ]
      },
      "B.1.429": {
        "Location": "US (California)",
        "WHO": "Epsilon",
        "NEXT": "20C/S:452R",
        "sublineages": [
          {
            "name": "B.1.429",
            "active": true,
            "mutations": [
              "S13I",
              "W152C",
              "L452R",
              "(Y453F)",
              "D614G",
              "(Q677H)",
              "D1183Y"
            ]
          }
        ]
      },
      "B.1.466.2": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.466.2",
            "active": true,
            "mutations": [
              "N439K",
              "D614G",
              "P681R"
            ]
          }
        ]
      },
      "B.1.525": {
        "Location": "Nigeria",
        "WHO": "Eta",
        "NEXT": "20A/S.484K",
        "sublineages": [
          {
            "name": "B.1.525",
            "active": true,
            "mutations": [
              "Q52R",
              "A67V",
              "H69del",
              "V70del",
              "Y144del",
              "(Y453F)",
              "E484K",
              "D614G",
              "Q677H",
              "F888L"
            ]
          }
        ]
      },
      "B.1.526": {
        "Location": "US (NY City)",
        "WHO": "Iota",
        "NEXT": "20C/S.484K",
        "sublineages": [
          {
            "name": "B.1.526.1",
            "active": true,
            "mutations": [
              "L5F",
              "(D80G)",
              "(T95I)",
              "(Y144del)",
              "(F157S)",
              "D253G",
              "(L452R)",
              "(S477N)",
              "(E484K)",
              "D614G",
              "A701V",
              "(T859N)",
              "(D950H)",
              "(Q957R)"
            ]
          }
        ]
      },
      "B.1.616": {
        "Location": "France",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.616",
            "active": true,
            "mutations": [
              "H66D",
              "G142G",
              "Y144del",
              "D215G",
              "V483A",
              "D614G",
              "H655Y",
              "G669S",
              "Q949R",
              "N1187D"
            ]
          }
        ]
      },
      "B.1.617.1": {
        "Location": "India",
        "WHO": "Kappa",
        "NEXT": "20A/S.154K; G/452.V3",
        "sublineages": [
          {
            "name": "B.1.617.1",
            "active": true,
            "mutations": [
              "L452R",
              "E484Q",
              "D614G",
              "P681R",
              "Q1071H",
              "(H1101D)"
            ]
          }
        ]
      },
      "B.1.617.2": {
        "Location": "India",
        "WHO": "Delta",
        "NEXT": "20H/501Y.V2",
        "sublineages": [
          {
            "name": "B.1.617.2",
            "active": true,
            "mutations": [
              "T19R",
              "(V70F)",
              "T95I",
              "G142D",
              "(Y145H)",
              "E156del",
              "F157del",
              "R158G",
              "(A222V)",
              "(W258L)",
              "L452R",
              "T478K",
              "E484K",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta+E484Q",
            "active": true,
            "mutations": [
              "T19R",
              "(V70F)",
              "T95I",
              "G142D",
              "(Y145H)",
              "E156del",
              "F157del",
              "R158G",
              "(A222V)",
              "(W258L)",
              "L452R",
              "T478K",
              "E484Q",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta+Q613H",
            "active": true,
            "mutations": [
              "T19R",
              "(V70F)",
              "T95I",
              "G142D",
              "(Y145H)",
              "E156del",
              "F157del",
              "R158G",
              "(A222V)",
              "(W258L)",
              "L452R",
              "T478K",
              "E484Q",
              "Q613H",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta Plus",
            "active": true,
            "mutations": [
              "T19R",
              "G142D",
              "K417N",
              "L452R",
              "T478K",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta V (1+0)",
            "active": true,
            "mutations": [
              "T19R",
              "Y144del",
              "L452R",
              "T478K",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta V (1+2)",
            "active": true,
            "mutations": [
              "T19R",
              "Y144del",
              "E156del",
              "F157del",
              "R158G",
              "L452R",
              "T478K",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta V (3+0)",
            "active": true,
            "mutations": [
              "T19R",
              "H69del",
              "V70del",
              "Y144del",
              "L452R",
              "T478K",
              "D614G",
              "P681R",
              "D950N"
            ]
          },
          {
            "name": "Delta V (3+2)",
            "active": true,
            "mutations": [
              "T19R",
              "H69del",
              "V70del",
              "Y144del",
              "E156del",
              "F157del",
              "R158G",
              "L452R",
              "T478K",
              "D614G",
              "P681R",
              "D950N"
            ]
          }
        ]
      },
      "B.1.617.3": {
        "Location": "India",
        "WHO": "",
        "NEXT": "20A",
        "sublineages": [
          {
            "name": "B.1.617.3",
            "active": true,
            "mutations": [
              "T19R",
              "L452R",
              "E484Q",
              "D614G",
              "P681R",
              "D950N"
            ]
          }
        ]
      },
      "B.1.619": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.619",
            "active": true,
            "mutations": [
              "I210T",
              "N440K",
              "E484K",
              "D614G",
              "D936N",
              "Q939F",
              "T1027I"
            ]
          }
        ]
      },
      "B.1.620": {
        "Location": "Cameroon",
        "WHO": "",
        "NEXT": "20A/S:126A",
        "sublineages": [
          {
            "name": "B.1.620",
            "active": true,
            "mutations": [
              "P26S",
              "H69del",
              "V70del",
              "V126A",
              "Y144del",
              "L241del",
              "L242del",
              "A243del",
              "H245Y",
              "S477N",
              "E484K",
              "N501Y",
              "D614G",
              "P681H",
              "T1027I",
              "D1118H"
            ]
          }
        ]
      },
      "B.1.621": {
        "Location": "Colombia",
        "WHO": "Mu",
        "NEXT": "21H",
        "sublineages": [
          {
            "name": "B.1.621",
            "active": true,
            "mutations": [
              "T95I",
              "Y144T/S",
              "Y145S/N",
              "ins146N",
              "E346K",
              "E484K",
              "N501Y",
              "D614G",
              "P681H",
              "D950N"
            ]
          }
        ]
      },
      "B.1.1.1.C37": {
        "Location": "Peru",
        "WHO": "Lambda",
        "NEXT": "21G",
        "sublineages": [
          {
            "name": "C.37",
            "active": true,
            "mutations": [
              "G75V",
              "T76I",
              "R246del",
              "(R246N)",
              "S247del",
              "Y248del",
              "L249del",
              "T250del",
              "P251del",
              "D252",
              "D253del",
              "(D253G)",
              "L452Q",
              "F490S",
              "D614G",
              "T859N"
            ]
          }
        ]
      },
      "B.1.1.318-related": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.1.318-related",
            "active": true,
            "mutations": [
              "T95I",
              "Y144del",
              "E484K",
              "D614G",
              "P681H",
              "D796H"
            ]
          }
        ]
      },
      "B.1.1.519": {
        "Location": "Mexico",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.1.519",
            "active": true,
            "mutations": [
              "T478K",
              "D614G",
              "P681H",
              "T732A"
            ]
          }
        ]
      },
      "B.1.1.523": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "B.1.1.523",
            "active": true,
            "mutations": [
              "E156del",
              "F157del",
              "R158G",
              "F306L",
              "E484K",
              "S494P",
              "D614G",
              "E780A",
              "D839V",
              "T1027I"
            ]
          }
        ]
      },
      "C.1.2": {
        "Location": "South Africa",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "C.1.2",
            "active": true,
            "mutations": [
              "P9L",
              "C136F",
              "Y144del",
              "R190S",
              "D215G",
              "Y449H",
              "E484K",
              "N501Y",
              "D614G",
              "H655Y",
              "N679K"
            ]
          }
        ]
      },
      "C.36.3-related": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "C.36.3-related",
            "active": true,
            "mutations": [
              "S12F",
              "H69del",
              "V70del",
              "W152R",
              "E346S",
              "L452R",
              "D614G",
              "Q677H",
              "A899S"
            ]
          }
        ]
      },
      "P.1": {
        "Location": "Japan/Brazil",
        "WHO": "Gamma",
        "NEXT": "20J/501Y.V3",
        "sublineages": [
          {
            "name": "P.1",
            "active": true,
            "mutations": [
              "L18F",
              "T20N",
              "P26S",
              "D138Y",
              "R190S",
              "K417N/T",
              "E484K",
              "N501Y",
              "D614G",
              "H655Y",
              "(P681H)",
              "T1027I",
              "V1176F"
            ]
          },
          {
            "name": "P.1+P681H",
            "active": true,
            "mutations": [
              "D614G"
            ]
          },
          {
            "name": "P.1.1",
            "active": true,
            "mutations": [
              "D614G"
            ]
          },
          {
            "name": "P.1.2",
            "active": true,
            "mutations": [
              "D614G"
            ]
          }
        ]
      },
      "P.2 (B.1.1.28.2)": {
        "Location": "Brazil",
        "WHO": "Zeta",
        "NEXT": "20J/",
        "sublineages": [
          {
            "name": "P.2",
            "active": true,
            "mutations": [
              "E484K",
              "(F565L)",
              "D614G",
              "(T859I)",
              "(V1176F)"
            ]
          }
        ]
      },
      "P.3 (B.1.1.28.3)": {
        "Location": "Phillipines",
        "WHO": "Theta",
        "NEXT": "",
        "sublineages": [
          {
            "name": "P.3",
            "active": true,
            "mutations": [
              "L141del",
              "G142del",
              "V143del",
              "A243del",
              "L244del",
              "E484K",
              "N501Y",
              "G593G",
              "D614G",
              "P681H",
              "S875S",
              "E1092K",
              "H1101Y",
              "V1176F"
            ]
          }
        ]
      },
      "R.1": {
        "Location": "",
        "WHO": "",
        "NEXT": "",
        "sublineages": [
          {
            "name": "R.1",
            "active": true,
            "mutations": [
              "W152R",
              "E484K",
              "D614G",
              "G769V"
            ]
          }
        ]
      }
    }
    

    self.bestFit = ko.observableArray([]);

    self.activeList = ko.observableArray(Object.keys(self.variants)
                            .reduce((x, variant) => {
                                self.variants[variant].sublineages.forEach(lineage => {
                                    x.push({name:variant + "(" + lineage.name + ")", status:lineage.active})
                                })
                                return x
                            },[]))
    console.log(self.activeList());

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
        Object.keys(self.variants).forEach(variant => {
            self.variants[variant].sublineages.forEach(lineage => {
                // if(self.activeList()[variant + "(" + lineage.name + ")"].status) {
                if(self.activeList().filter(check => check.name === variant + "(" + lineage.name + ")")[0].status) {
                    tempScore = self.getScore(selections,lineage.mutations)
                    display = variant + " "  + self.variants[variant].WHO + " (" + lineage.name + ")" 
                    if(tempScore > maxScore) {
                        maxScore = tempScore
                        maxVariants = [{display:display, lineage:lineage}]
                    } else if(tempScore == maxScore && maxScore > 0) {
                        maxVariants.push({display:display, lineage:lineage})
                    }
                }
            })
        })

        console.log("Best fit:", maxVariants)
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

        selections.forEach( item => {
            index = variant.indexOf(item)
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