//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { ScrollView, Button,Text,View } from "react-native";
import { VictoryBar, VictoryGroup, VictoryStack, VictoryChart, VictoryLegend,VictoryContainer } from "victory-native";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ViewShot from "react-native-view-shot";

export default class Resultados extends Component {
  //Formulario Component
  constructor(props) {
  super(props);
  this.logContainerRef = this.logContainerRef.bind(this);
}

  state={
imagen2:'a'
}


  componentDidMount() {
    this.logContainerRef();
  }

  logContainerRef() {
    console.log(this.containerRef);
    this.setState({imagen2: this.containerRef});
  }

  async createPDF() {

    let options = {

      html: '<img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" /><img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" /><img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" />',
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    alert(file.filePath);
  }

  preparapdf(){
    alert(this.state.imagen2);
  }
  onCaptureViewShot = (uri) => {
    const base64Data = uri;
  this.setState({imagen2: base64Data});
    };

   render() {
     return (
       <ScrollView><View>
       <Text>{this.logContainerRef }</Text>
      <Button  onPress={this.createPDF.bind(this)}
        title="Create PDF"
        />
<ViewShot onCapture={this.onCaptureViewShot}
          captureMode="mount"
          options={{
            format: 'png',
            quality: 1.0,
            result: 'base64',
            }}>
         <VictoryBar/>
</ViewShot>
         <VictoryBar  polar
           data={[
             { x: 1, y: 1 },
             { x: 2, y: 2 },
             { x: 3, y: 3 },
             { x: 4, y: 2 },
             { x: 5, y: 1 }
           ]}
         />

           <VictoryBar
             barRatio={0.8}
             cornerRadius={{ topLeft: (d) => d.x * 4 }}
             style={{
               data: { fill: "red" }
             }}
             data={[
               { x: 1, y: 1 },
               { x: 2, y: 2 },
               { x: 3, y: 66 },
               { x: 4, y: 2 },
               { x: 5, y: 1 }
             ]}
             labels={(d) => `y: ${d.y}`}
              y0={(d) => d.y - 50}
           />
           <VictoryChart>
     			<VictoryBar

     			  style={{ data: { fill: 'blue', width: 18 }}}
             data={[
               { x: 1, y: 1 },
               { x: 2, y: 2 },
               { x: 3, y: 66 },
               { x: 4, y: 2 },
               { x: 5, y: 1 }
             ]}
     			  events={[{
     				target: "data",
     				eventHandlers: {
     				  onPressIn: (evt, props) => this.handlePress(evt, props)
     				}
     			  }]}
     			/>
     		  </VictoryChart>
         <VictoryGroup
           width={300}
           height={375}
           offset={20}
           colorScale={"qualitative"}
         >
           <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]} />
           <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }]} />
           <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }]} />
         </VictoryGroup>

         <VictoryStack width={300} height={375} colorScale={"qualitative"}>
           <VictoryBar data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]} />
           <VictoryBar data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 1 }]} />
           <VictoryBar data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 2 }]} />
         </VictoryStack>

         <VictoryChart domain={[0, 3]}>
           <VictoryLegend x={125} y={50}
           	title="Legend"
             centerTitle
             orientation="horizontal"
             gutter={20}
             style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
             data={[
               { name: "One", symbol: { fill: "tomato", type: "star" } },
               { name: "Two", symbol: { fill: "orange" } },
               { name: "Three", symbol: { fill: "gold" } }
             ]}
             />
             <VictoryBar
       			  style={{ data: { fill: 'blue', width: 18 }}}
               data={[
                 { x: 1, y: 1 },
                 { x: 2, y: 2 },
                 { x: 3, y: 3 },
               ]}
       			  events={[{
       				target: "data",
       				eventHandlers: {
       				  onPressIn: (evt, props) => this.handlePress(evt, props)
       				}
       			  }]}
       			/>
   </VictoryChart>
         <VictoryBar
           height={375}
           padding={75}
           style={{
             data: {
               fill: data => (data.y > 2 ? "red" : "blue")
             }
           }}
           data={[
             { x: 1, y: 1 },
             { x: 2, y: 2 },
             { x: 3, y: 3 },
             { x: 4, y: 2 },
             { x: 5, y: 1 }
           ]}
         />
         </View>
       </ScrollView>
     );
   }
 }
