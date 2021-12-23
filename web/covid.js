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
        {name:"\u0394H69", selected: ko.observable(false)},
        {name:"\u0394V70", selected: ko.observable(false)},
        {name:"(V70F)", selected: ko.observable(false)},
        {name:"G75V", selected: ko.observable(false)},
        {name:"T76I", selected: ko.observable(false)},
        {name:"D80A", selected: ko.observable(false)},
        {name:"(D80G)", selected: ko.observable(false)},
        {name:"T95I", selected: ko.observable(false)},
        {name:"(T95I)", selected: ko.observable(false)},
        {name:"V126A", selected: ko.observable(false)},
        {name:"C136F", selected: ko.observable(false)},
        {name:"D138Y", selected: ko.observable(false)},
        {name:"\u0394L141", selected: ko.observable(false)},
        {name:"\u0394G142", selected: ko.observable(false)},
        {name:"G142G", selected: ko.observable(false)},
        {name:"G142D", selected: ko.observable(false)},
        {name:"\u0394V143", selected: ko.observable(false)},
        {name:"\u0394Y144", selected: ko.observable(false)},
        {name:"(\u0394Y144)", selected: ko.observable(false)},
        {name:"Y144T/S", selected: ko.observable(false)},
        {name:"Y145D", selected: ko.observable(false)},
        {name:"(Y145H)", selected: ko.observable(false)},
        {name:"Y145S/N", selected: ko.observable(false)},
        {name:"ins146N", selected: ko.observable(false)},
        {name:"W152C", selected: ko.observable(false)},
        {name:"W152R", selected: ko.observable(false)},
        {name:"\u0394E156", selected: ko.observable(false)},
        {name:"(F157S)", selected: ko.observable(false)},
        {name:"\u0394F157", selected: ko.observable(false)},
        {name:"R158G", selected: ko.observable(false)},
        {name:"(E178H)", selected: ko.observable(false)},
        {name:"R190S", selected: ko.observable(false)},
        {name:"I210T", selected: ko.observable(false)},
        {name:"\u0394N211", selected: ko.observable(false)},
        {name:"L212I", selected: ko.observable(false)},
        {name:"ins214EPE", selected: ko.observable(false)},
        {name:"D215G", selected: ko.observable(false)},
        {name:"(A222V)", selected: ko.observable(false)},
        {name:"D241", selected: ko.observable(false)},
        {name:"D242", selected: ko.observable(false)},
        {name:"\u0394L242", selected: ko.observable(false)},
        {name:"D243", selected: ko.observable(false)},
        {name:"\u0394A243", selected: ko.observable(false)},
        {name:"D244", selected: ko.observable(false)},
        {name:"\u0394L244", selected: ko.observable(false)},
        {name:"H245Y", selected: ko.observable(false)},
        {name:"D246(R246N)", selected: ko.observable(false)},
        {name:"D247", selected: ko.observable(false)},
        {name:"D248", selected: ko.observable(false)},
        {name:"D249", selected: ko.observable(false)},
        {name:"D250", selected: ko.observable(false)},
        {name:"D251", selected: ko.observable(false)},
        {name:"D252", selected: ko.observable(false)},
        {name:"D253G", selected: ko.observable(false)},
        {name:"D253(D253G)", selected: ko.observable(false)},
        {name:"(W258L)", selected: ko.observable(false)},
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
        {name:"(L452R)", selected: ko.observable(false)},
        {name:"L452Q", selected: ko.observable(false)},
        {name:"(Y453F)", selected: ko.observable(false)},
        {name:"S477N", selected: ko.observable(false)},
        {name:"(S477R)", selected: ko.observable(false)},
        {name:"(S477N)", selected: ko.observable(false)},
        {name:"T478K", selected: ko.observable(false)},
        {name:"V483A", selected: ko.observable(false)},
        {name:"E484K", selected: ko.observable(false)},
        {name:"E484A", selected: ko.observable(false)},
        {name:"(E484K)", selected: ko.observable(false)},
        {name:"E484Q", selected: ko.observable(false)},
        {name:"(F490S)", selected: ko.observable(false)},
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
        {name:"(F565L)", selected: ko.observable(false)},
        {name:"A570D", selected: ko.observable(false)},
        {name:"G593G", selected: ko.observable(false)},
        {name:"Q613H", selected: ko.observable(false)},
        {name:"D614G", selected: ko.observable(false)},
        {name:"H655Y", selected: ko.observable(false)},
        {name:"G669S", selected: ko.observable(false)},
        {name:"(Q677H)", selected: ko.observable(false)},
        {name:"Q677H", selected: ko.observable(false)},
        {name:"N679K", selected: ko.observable(false)},
        {name:"P681H", selected: ko.observable(false)},
        {name:"P681R", selected: ko.observable(false)},
        {name:"(P681H)", selected: ko.observable(false)}
     ])

     self.variants = 
     {
        "B.1.1": {
          "Location": "",
          "WHO": "",
          "NEXT": "",
          "sublineages": [
            {
              "name": "B.1.1",
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
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "(E178H)",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "B.1.1.7+E484K",
              "active": true,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "E484K",
                "N501Y",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "B.1.1.7+L452R",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "L452R",
                "N501Y",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "B.1.1.7+S494P",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "S494P",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q1",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q2",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q3",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q4",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681R"
              ]
            },
            {
              "name": "Q5",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q6",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q7",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G",
                "P681H"
              ]
            },
            {
              "name": "Q8",
              "active": false,
              "mutations": [
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "N501Y",
                "A570D",
                "D614G"
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
                "\u0394H69",
                "\u0394V70",
                "T95I",
                "\u0394G142",
                "\u0394V143",
                "\u0394Y144",
                "Y145D",
                "\u0394N211",
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
                "P681H"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "D614G"
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
                "\u0394H69",
                "\u0394V70",
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
                "D614G"
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
                "(Q677H)"
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
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "(Y453F)",
                "E484K",
                "D614G",
                "Q677H"
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
                "(\u0394Y144)",
                "(F157S)",
                "D253G",
                "(L452R)",
                "(S477N)",
                "(E484K)",
                "D614G"
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
              "active": false,
              "mutations": [
                "H66D",
                "G142G",
                "\u0394Y144",
                "D215G",
                "V483A",
                "D614G",
                "H655Y",
                "G669S"
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
                "P681R"
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
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "(A222V)",
                "(W258L)",
                "L452R",
                "T478K",
                "E484K",
                "D614G",
                "P681R"
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
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "(A222V)",
                "(W258L)",
                "L452R",
                "T478K",
                "E484Q",
                "D614G",
                "P681R"
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
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "(A222V)",
                "(W258L)",
                "L452R",
                "T478K",
                "E484Q",
                "Q613H",
                "D614G",
                "P681R"
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
                "P681R"
              ]
            },
            {
              "name": "Delta V (1+0)",
              "active": false,
              "mutations": [
                "T19R",
                "\u0394Y144",
                "L452R",
                "T478K",
                "D614G",
                "P681R"
              ]
            },
            {
              "name": "Delta V (1+2)",
              "active": false,
              "mutations": [
                "T19R",
                "\u0394Y144",
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "L452R",
                "T478K",
                "D614G",
                "P681R"
              ]
            },
            {
              "name": "Delta V (3+0)",
              "active": false,
              "mutations": [
                "T19R",
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "L452R",
                "T478K",
                "D614G",
                "P681R"
              ]
            },
            {
              "name": "Delta V (3+2)",
              "active": false,
              "mutations": [
                "T19R",
                "\u0394H69",
                "\u0394V70",
                "\u0394Y144",
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "L452R",
                "T478K",
                "D614G",
                "P681R"
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
                "P681R"
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
              "active": false,
              "mutations": [
                "I210T",
                "N440K",
                "E484K",
                "D614G"
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
              "active": false,
              "mutations": [
                "P26S",
                "\u0394H69",
                "\u0394V70",
                "V126A",
                "\u0394Y144",
                "D241",
                "\u0394L242",
                "\u0394A243",
                "H245Y",
                "S477N",
                "E484K",
                "N501Y",
                "D614G",
                "P681H"
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
                "P681H"
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
                "D246(R246N)",
                "D247",
                "D248",
                "D249",
                "D250",
                "D251",
                "D252",
                "D253(D253G)",
                "L452Q",
                "F490S",
                "D614G"
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
              "active": false,
              "mutations": [
                "T95I",
                "\u0394Y144",
                "E484K",
                "D614G",
                "P681H"
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
                "P681H"
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
              "active": false,
              "mutations": [
                "\u0394E156",
                "\u0394F157",
                "R158G",
                "F306L",
                "E484K",
                "S494P",
                "D614G"
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
              "active": false,
              "mutations": [
                "P9L",
                "C136F",
                "\u0394Y144",
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
              "active": false,
              "mutations": [
                "S12F",
                "\u0394H69",
                "\u0394V70",
                "W152R",
                "E346S",
                "L452R",
                "D614G",
                "Q677H"
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
                "(P681H)"
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
                "D614G"
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
              "active": false,
              "mutations": [
                "\u0394L141",
                "\u0394G142",
                "\u0394V143",
                "\u0394A243",
                "\u0394L244",
                "E484K",
                "N501Y",
                "G593G",
                "D614G",
                "P681H"
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
                "D614G"
              ]
            }
          ]
        }
      }
    //  [
    //     {Location:'UK', Pango:'B.1.1.7', WHO:'Alpha', NEXT: '20I/501Y.V1', 
    //      muts:['\u0394H69', '\u0394V70', '\u0394Y144', 'E484K', 'S494P', 'N501Y', 'P681H'], score: 0},
    
    //     {Location:'South Africa', Pango:'B.1.351', WHO:'Beta', NEXT: '20H/501Y.V2',
    //      muts:['D80A', 'E484K', 'N501Y'], score: 0},
    
    //     {Location:' - ', Pango:'B.1.375', WHO:' - ', NEXT: '20C',
    //      muts:['\u0394H69', '\u0394V70', 'S477R'], score: 0},
    
    //     {Location:'US, California', Pango:'B.1.427', WHO:'Epsilon', NEXT: '20C/S:452R',
    //      muts:['L452R', 'Y453F',], score: 0},
     
    //     {Location:'US, California', Pango:'B.1.429', WHO:' - ', NEXT: '20C/S:452R',
    //      muts:['W152C', 'L452R', 'Y453F', 'Q677H',], score: 0},

    //     {Location:'UK, Nigeria', Pango:'B.1.525', WHO:'Eta', NEXT: '20A/S.484K',
    //      muts:['Q52R', 'A67V', '\u0394H69', '\u0394V70','\u0394Y144', 'Y453F', 'E484K', 'Q677H'], score: 0},

    //     {Location:'US, NY City', Pango:'B.1.526.1', WHO:'Iota', NEXT: '20C/S.484K',
    //      muts:['D80G', 'T95I', '\u0394Y144', 'F157S','L452R', 'S477N', 'E484K', ], score: 0},

    //     {Location:'India', Pango:'B.1.617.1', WHO:'Kappa', NEXT: '20A/S.154K; G/452.V3',
    //      muts:['T95I', 'G142D', 'E154K', 'L452R', 'E484Q', 'P681R', ], score: 0},

    //     {Location:'India', Pango:'B.1.617.2', WHO:'Delta', NEXT: '20A/S.478K',
    //      muts:['V70F', 'T95I', 'G142D', '\u0394E156', '\u0394F157', 'R158G', 'L452R', 'T478K', 'P681R', ], score: 0},

    //     {Location:'India', Pango:'B.1.617.3', WHO:'-', NEXT: '20A',
    //      muts:['G142D', 'L452R', 'E484Q', 'P681R', ], score: 0},

    //     {Location:'Cameroon', Pango:'B.1.620', WHO:'-', NEXT: '20A/S:126A',
    //      muts:['\u0394H69', '\u0394V70', '\u0394Y144', 'S477N', 'E484K', 'N501Y', 'P681H', ], score: 0},

    //     {Location:'Columbia', Pango:'B.1.621', WHO:'-', NEXT: '21H',
    //      muts:['T95I', 'Y144T', 'Y145S', 'ins146N', 'E484K', 'N501Y', 'P681H', ], score: 0},

    //     {Location:'Peru', Pango:'B.1.1.1.C37', WHO:'Lambda', NEXT: '21G',
    //      muts:['G75V', 'T76I', 'L452Q', 'F490S', ], score: 0},

    //     {Location:'Japan/Brazil', Pango:'P.1', WHO:'Gamma', NEXT: '20J/501Y.V3',
    //      muts:['D138Y', 'E484K', 'N501Y', 'H655Y', 'P681H', ], score: 0},

    //     {Location:'Brazil', Pango:'P.2', WHO:'Zeta', NEXT: '21J',
    //      muts:['E484K', ], score: 0},

    //      {Location:'Philippines', Pango:'P.3(B.1.1.28.3)', WHO:'Theta', NEXT: '-',
    //      muts:['\u0394G141', '\u0394G142', '\u0394G143','E484K', 'N501Y', 'P681H', ], score: 0},

    //      {Location:'South Africa', Pango:'B.1.1.529', WHO:'Omicron', NEXT: '-',
    //      muts:['A67V', '\u039421K69-70', 'T95I', 'GVYY142-145D', 'NL211-212I', 'G339D', 'S371L', 'S373P', 'S375F', 'K417N', 'N440K', 'G446S', 'S477N', 'T478K', 'E484A', 'Q493R', 'G496S', 'Q498R', 'N501Y', 'Y505H', 'T547K', 'D614G', 'H655Y', 'N679K', 'P681H', 'N764K', 'D796Y', 'N856K', 'Q954H', 'N969K', 'L981F' ], score: 0}
         
    //     ]

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