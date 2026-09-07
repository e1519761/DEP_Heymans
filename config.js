var config = {
    style: 'mapbox://styles/heymanslo25/cmtpq739y00eq01pm7elj7sof',
    accessToken: 'pk.eyJ1IjoiaGV5bWFuc2xvMjUiLCJhIjoiY210cHdsdTl5MGNvcDJ4cXVheWVsZWQyeSJ9.WzgPocI8dYtJQTXVSJXGlQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'HOW NEARLY IS YOUR NEIGHBOURHOOD CHILDCARE ?',
    subtitle: 'Singapore has 1,925 licensed childcare centres and 13,436 HDB blocks. This story maps the distance between them. Using Early Childhood Development Agency records and HDB building footprints, it measures how far every block sits from its nearest centre, then draws a 400-metre service area- roughly a five-minute walk. The method follows the food deserts approach, but the result does not. Rather than a shortage, the map shows coverage that is close to total: 97.6 per cent of blocks fall inside the walk. What remains is a thin edge of 318 blocks, and they are not where you would expect.',
    byline: 'By Heymans Hin Ming Lo',
    footer: 'Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. Data Sources: data.gov.sg. - Early Childhood Development Agency + Housing & Development Board',
    chapters: [
        {
            id: 'last-container',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.1               
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.1                
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'WHERE FAMILIES LIVE',
            description: 'Singapore has 13,436 HDB blocks, and almost every family with a young child lives in one of them. Before asking whether childcare is within reach, the map has to establish who is doing the reaching. <br><br>.<br><br><img src="assets/260907_Legend-01.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0               
                },
                {
                    layer: 'childcare',
                    opacity: 0                
                },
                {
                    layer: 'hdb-all',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0                
                },
                {
                    layer: 'childcare',
                    opacity: 0                
                },
                {
                    layer: 'hdb-all',
                    opacity: 1
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'WHERE THE CHILDCARE IS',
            description: 'There are 1,925 licensed childcare centres across the island — roughly one for every seven HDB blocks. Plotted together, the coverage looks dense almost everywhere. But density on a map is not the same as reach on foot.<br><br>.<br><br><img src="assets/260907_Legend-02.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0               
                },
                {
                    layer: 'childcare',
                    opacity: 1                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0                
                },
                {
                    layer: 'childcare',
                    opacity: 1                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.3
                }
            ]
        },
        {
            id: 'third-container',
            alignment: 'left',
            hidden: false,
            title: 'FIVE MINUTES ON FOOT',
            description: 'A 400-metre buffer around each centre is about a five-minute walk. Merged, those buffers cover 254 square kilometres- a third of Singapore, and nearly all of its housing. Each block is now shaded by its distance to the nearest centre. The median is 122 metres. Most children in Singapore live closer to a preschool than to their own bus stop. <br><br>.<br><br><img src="assets/260907_Legend-03.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 1, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.15               
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.15                
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'fouth-container',
            alignment: 'left',
            hidden: false,
            title: 'WHO LEFTS OUT?',
            description: 'Only 318 blocks fall outside the service area - 2.4 per cent. Their median distance is 502 metres, barely past the line, and the most isolated sit at Changi and Loyang rather than in family estates. <br><br>.<br><br><img src="assets/260907_Legend-04.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0               
                },
                {
                    layer: 'childcare',
                    opacity: 0                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0                
                },
                {
                    layer: 'childcare',
                    opacity: 0                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.3
                }
            
            ]
        },
        {
            id: 'fifth-container',
            alignment: 'left',
            hidden: false,
            title: 'BLOCKS 1 TO 6, CHANGI VILLAGE',
            description: 'Seven blocks sit further from childcare than any others in Singapore. They are all in the same place.<br><br>Changi Village is a small estate at the island\'s northeastern tip &mdash; six blocks and a market, separated from the rest of Singapore by the airport and a long stretch of open land. The nearest childcare centre is just over three kilometres away. On foot, that is close to forty minutes.<br><br>Everywhere else, the five-minute walk holds. Here it does not, and it is not close. <br><br>. <br><br><img src="assets/Changi Village.png" style="height:420%;width:420px;"></img>',
            location: {
                center: [103.981859, 1.387267],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.10               
                },
                {
                    layer: 'childcare',
                    opacity: 0.5                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.10                
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'sixth-container',
            alignment: 'left',
            hidden: false,
            title: 'BLOCKS 218 TO 325, Jurong West',
            description: 'Changi Village is far from everything. This next cluster is not.<br><br>Around blocks 218 to 325 in Jurong West, roughly twenty blocks sit outside the five-minute walk &mdash; not because the area is isolated, but because they fall in the space between centres. The nearest are eight hundred to nine hundred metres away in either direction.<br><br>This is the more common kind of gap. Not a place the network missed, but a seam where two catchments fail to meet.<br><br><img src="assets/Jurong West.jpg" style="height:420%;width:420px;"></img>',
            location: {
                center: [103.726320, 1.358727],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.10               
                },
                {
                    layer: 'childcare',
                    opacity: 0.5                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 0
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.10                
                },
                {
                    layer: 'childcare',
                    opacity: 0.5                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ]
        },
        {
            id: 'last-container',
            alignment: 'left',
            hidden: false,
            title: 'What Does The Gap Represent?',
            description: '1,925 centres serve 13,436 blocks, and 97.6 per cent fall within a five-minute walk. As a coverage figure that is close to complete. As a measure of how well those centres are placed, it says very little. In the dense estates, buffers overlap heavily. Blocks sit within reach of several centres at once while 318 blocks reach none. The provision is not short. It is unevenly distributed. The gaps come in two kinds. Jurong West holds 125 uncovered blocks because centres cluster to either side and leave a seam through the middle. Changi Village is the opposite: seven blocks three kilometres from anything. Each needs a different response. A seam closes with one well-placed centre. A remote estate needs provision built for it. Reading the 97.6 per cent and concluding there is no problem is how both stay unsolved.  <br><br><img src="assets/260907_Legend-05.png" style="height:200%;width:200px;"></img>',
            location: {
                center: [103.721242, 1.357183],
                zoom: 10.8,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 0.5, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.1               
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ],
            onChapterExit: [
                {
                    layer: 'hdb-outside',
                    opacity: 1
                },
                {
                    layer: 'childcare-400',
                    opacity: 0.1                
                },
                {
                    layer: 'childcare',
                    opacity: 0.8                
                },
                {
                    layer: 'hdb-all',
                    opacity: 0.2
                }
            ]
        },
        
    ]
};
