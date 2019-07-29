//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
//import react in our code.
import { ScrollView, Button,Text,View } from "react-native";
import { VictoryBar, VictoryGroup, VictoryStack, VictoryChart, VictoryLegend,VictoryContainer,VictoryLabel,VictoryAxis,VictoryVoronoiContainer, VictoryTooltip, VictoryLine } from "victory-native";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import ViewShot from "react-native-view-shot";


export default class Resultados extends Component {
  //Formulario Component
  constructor(props) {
  super(props);
  this.logContainerRef = this.logContainerRef.bind(this);
}

  state={
imagen2:'a',
resul:'{"sombras":[{ "level":0, "TOTAL": 8,"TA":5,"C" :3, "TR" :3.064999},{ "level":1, "TOTAL": 10,"TA":4,"C" :6, "TR" :2.939999},{ "level":2, "TOTAL": 10,"TA":4,"C" :6, "TR" :3.104999}]}',
datos: [{ x: 1, y: 6 }, { x: 2, y: 10 }, { x: 3, y: 2 }, { x: 4, y: 8 }],
datos2 : [{ x: 1, y: 10 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 2 }],
}

  componentDidMount() {
    this.logContainerRef();
    this.arraa();
  }

  logContainerRef() {
    console.log(this.containerRef);
    this.setState({imagen2: this.containerRef});
  }

  async createPDF() {

    let options = {

      html: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa<img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" /><img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" /><img src="data:image/png;base64,'+`${this.state.imagen2}`+'alt="Form"width="300" height="250" />',
      fileName: 'test',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options)
    // console.log(file.filePath);
    alert(file.filePath);
  };

arraa(){
  const miArray = '[{ "x": 1, "y": 1 }, { "x": 2, "y": 2 }, { "x": 3, "y": 3 }]';
  const nuevo=  JSON.parse(miArray);
  this.setState({datos2: nuevo});
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
       <ScrollView>
       <View>
      <Button  onPress={this.createPDF.bind(this)}
        title="Create PDF"
        />


<Text style={{ fontSize: 30 ,fontWeight: 'bold'}}>Juego D2</Text>

           <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
           <VictoryLegend
            x={70}
            y={50}
           	title="D2"
             centerTitle
             orientation="horizontal"
             style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
             data={[
              { name: "Usuario", symbol: { fill: "tomato" } },
              { name: "Media diagnosticada", symbol: { fill: "orange" } },
             ]}
             />
     			<VictoryBar
     		  style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
             data={this.state.datos}
     			/>
          <VictoryAxis
  tickValues={[1.5, 3.5]}
  tickFormat={['Total elementos','Aciertos']}
/>
     		  </VictoryChart>

          <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
          <VictoryLegend
           x={70}
           y={50}
           title="D2"
            centerTitle
            orientation="horizontal"
            style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
            data={[
             { name: "Usuario", symbol: { fill: "tomato" } },
             { name: "Media diagnosticados", symbol: { fill: "orange" } },
            ]}
            />
         <VictoryBar
          style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
            data={this.state.datos2}
         />
         <VictoryAxis
 tickValues={[1.5, 3.5]}
 tickFormat={['Fallos','Tiempo de respuesta']}
/>
         </VictoryChart>




            <VictoryChart domain={{x: [1, 4], y: [0, 10]}}

                    containerComponent={
                      <VictoryVoronoiContainer

                        voronoiDimension="x"
                        labels={(d) => `y: ${d.y}`}
                        labelComponent={
                          <VictoryTooltip
                            cornerRadius={0}
                            flyoutStyle={{ fill: "white" }}
                          />}
                      />}

                  >

                  <VictoryAxis
          tickValues={[1 , 2 , 3 , 4]}
          tickFormat={['Total intentos','Fallos','    Tiempo de respuesta','    Aciertos']}
         />
         <VictoryLegend x={70} y={50}
           title="General - D2"
           centerTitle
           orientation="horizontal"
           style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
           data={[
            { name: "Usuario", symbol: { fill: "tomato" },  },
            { name: "Media diagnosticados", symbol: { fill: "orange" } },

           ]}
           />
                    <VictoryLine
                      data={[{ x: 1, y: 5 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 2 }]}
                      style={{
                        data: {
                          stroke: "tomato",
                        },
                        labels: { fill: "tomato" }
                      }}
                    />

                    <VictoryLine
                      data={[{ x: 1, y: 4 }, { x: 2, y:4 }, { x: 3, y: 3 }, { x: 4, y: 2 }]}
                      style={{
                        data: {
                          stroke: "orange",

                        },
                        labels: { fill: "orange" }
                      }}
                    />
                  </VictoryChart>





                  <Text style={{ fontSize: 30 ,fontWeight: 'bold'}}>Juego Stroop</Text>

                             <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                             <VictoryLegend
                              x={70}
                              y={50}
                             	title="Stroop"
                               centerTitle
                               orientation="horizontal"
                               style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                               data={[
                                { name: "Usuario", symbol: { fill: "tomato" } },
                                { name: "Media diagnosticada", symbol: { fill: "orange" } },
                               ]}
                               />
                       			<VictoryBar
                       		  style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                               data={this.state.datos}
                       			/>
                            <VictoryAxis
                    tickValues={[1.5, 3.5]}
                    tickFormat={['Total elementos','Aciertos']}
                  />
                       		  </VictoryChart>

                            <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                            <VictoryLegend
                             x={70}
                             y={50}
                             title="Stroop"
                              centerTitle
                              orientation="horizontal"
                              style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                              data={[
                               { name: "Usuario", symbol: { fill: "tomato" } },
                               { name: "Media diagnosticados", symbol: { fill: "orange" } },
                              ]}
                              />
                           <VictoryBar
                            style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                              data={this.state.datos2}
                           />
                           <VictoryAxis
                   tickValues={[1.5, 3.5]}
                   tickFormat={['Fallos','Tiempo de respuesta']}
                  />
                           </VictoryChart>




                              <VictoryChart domain={{x: [1, 4], y: [0, 10]}}

                                      containerComponent={
                                        <VictoryVoronoiContainer

                                          voronoiDimension="x"
                                          labels={(d) => `y: ${d.y}`}
                                          labelComponent={
                                            <VictoryTooltip
                                              cornerRadius={0}
                                              flyoutStyle={{ fill: "white" }}
                                            />}
                                        />}

                                    >

                                    <VictoryAxis
                            tickValues={[1 , 2 , 3 , 4]}
                            tickFormat={['Total intentos','Fallos','    Tiempo de respuesta','    Aciertos']}
                           />
                           <VictoryLegend x={70} y={50}
                             title="General - Stroop"
                             centerTitle
                             orientation="horizontal"
                             style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                             data={[
                              { name: "Usuario", symbol: { fill: "tomato" },  },
                              { name: "Media diagnosticados", symbol: { fill: "orange" } },

                             ]}
                             />
                                      <VictoryLine
                                        data={[{ x: 1, y: 5 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 2 }]}
                                        style={{
                                          data: {
                                            stroke: "tomato",
                                          },
                                          labels: { fill: "tomato" }
                                        }}
                                      />

                                      <VictoryLine
                                        data={[{ x: 1, y: 4 }, { x: 2, y:4 }, { x: 3, y: 3 }, { x: 4, y: 2 }]}
                                        style={{
                                          data: {
                                            stroke: "orange",

                                          },
                                          labels: { fill: "orange" }
                                        }}
                                      />
                                    </VictoryChart>






                                    <Text style={{ fontSize: 30 ,fontWeight: 'bold'}}>Juego Mole</Text>

                                               <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                                               <VictoryLegend
                                                x={70}
                                                y={50}
                                               	title="Mole"
                                                 centerTitle
                                                 orientation="horizontal"
                                                 style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                                 data={[
                                                  { name: "Usuario", symbol: { fill: "tomato" } },
                                                  { name: "Media diagnosticada", symbol: { fill: "orange" } },
                                                 ]}
                                                 />
                                         			<VictoryBar
                                         		  style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                                                 data={this.state.datos2}
                                         			/>
                                              <VictoryAxis
                                      tickValues={[1.5, 3.5]}
                                      tickFormat={['Total elementos','Aciertos']}
                                    />
                                         		  </VictoryChart>

                                              <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                                              <VictoryLegend
                                               x={70}
                                               y={50}
                                               title="Mole"
                                                centerTitle
                                                orientation="horizontal"
                                                style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                                data={[
                                                 { name: "Usuario", symbol: { fill: "tomato" } },
                                                 { name: "Media diagnosticados", symbol: { fill: "orange" } },
                                                ]}
                                                />
                                             <VictoryBar
                                              style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                                                data={this.state.datos}
                                             />
                                             <VictoryAxis
                                     tickValues={[1.5, 3.5]}
                                     tickFormat={['Fallos','Tiempo de respuesta']}
                                    />
                                             </VictoryChart>




                                                <VictoryChart domain={{x: [1, 4], y: [0, 10]}}

                                                        containerComponent={
                                                          <VictoryVoronoiContainer

                                                            voronoiDimension="x"
                                                            labels={(d) => `y: ${d.y}`}
                                                            labelComponent={
                                                              <VictoryTooltip
                                                                cornerRadius={0}
                                                                flyoutStyle={{ fill: "white" }}
                                                              />}
                                                          />}

                                                      >

                                                      <VictoryAxis
                                              tickValues={[1 , 2 , 3 , 4]}
                                              tickFormat={['Total intentos','Fallos','    Tiempo de respuesta','    Aciertos']}
                                             />
                                             <VictoryLegend x={70} y={50}
                                               title="General - Mole"
                                               centerTitle
                                               orientation="horizontal"
                                               style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                               data={[
                                                { name: "Usuario", symbol: { fill: "tomato" },  },
                                                { name: "Media diagnosticados", symbol: { fill: "orange" } },

                                               ]}
                                               />
                                                        <VictoryLine
                                                          data={[{ x: 1, y: 5 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 2 }]}
                                                          style={{
                                                            data: {
                                                              stroke: "tomato",
                                                            },
                                                            labels: { fill: "tomato" }
                                                          }}
                                                        />

                                                        <VictoryLine
                                                          data={[{ x: 1, y: 4 }, { x: 2, y:4 }, { x: 3, y: 3 }, { x: 4, y: 2 }]}
                                                          style={{
                                                            data: {
                                                              stroke: "orange",

                                                            },
                                                            labels: { fill: "orange" }
                                                          }}
                                                        />
                                                      </VictoryChart>







                                                      <Text style={{ fontSize: 30 ,fontWeight: 'bold'}}>Juego Sombras</Text>

                                                                 <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                                                                 <VictoryLegend
                                                                  x={70}
                                                                  y={50}
                                                                 	title="Sombras"
                                                                   centerTitle
                                                                   orientation="horizontal"
                                                                   style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                                                   data={[
                                                                    { name: "Usuario", symbol: { fill: "tomato" } },
                                                                    { name: "Media diagnosticada", symbol: { fill: "orange" } },
                                                                   ]}
                                                                   />
                                                           			<VictoryBar
                                                           		  style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                                                                   data={this.state.datos2}
                                                           			/>
                                                                <VictoryAxis
                                                        tickValues={[1.5, 3.5]}
                                                        tickFormat={['Total elementos','Aciertos']}
                                                      />
                                                           		  </VictoryChart>

                                                                <VictoryChart domain={{x: [0.5, 4.5], y: [0, 20]}}>
                                                                <VictoryLegend
                                                                 x={70}
                                                                 y={50}
                                                                 title="Sombras"
                                                                  centerTitle
                                                                  orientation="horizontal"
                                                                  style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                                                  data={[
                                                                   { name: "Usuario", symbol: { fill: "tomato" } },
                                                                   { name: "Media diagnosticados", symbol: { fill: "orange" } },
                                                                  ]}
                                                                  />
                                                               <VictoryBar
                                                                style={{ data: { fill: 'blue', width: 18 , fill: data => (data.x === 1 ? "tomato" : data.x === 2 ? "orange" : data.x === 3 ? "tomato" : data.x === 4 ? "orange" : "black"), }}}
                                                                  data={this.state.datos}
                                                               />
                                                               <VictoryAxis
                                                       tickValues={[1.5, 3.5]}
                                                       tickFormat={['Fallos','Tiempo de respuesta']}
                                                      />
                                                               </VictoryChart>




                                                                  <VictoryChart domain={{x: [1, 4], y: [0, 10]}}

                                                                          containerComponent={
                                                                            <VictoryVoronoiContainer

                                                                              voronoiDimension="x"
                                                                              labels={(d) => `y: ${d.y}`}
                                                                              labelComponent={
                                                                                <VictoryTooltip
                                                                                  cornerRadius={0}
                                                                                  flyoutStyle={{ fill: "white" }}
                                                                                />}
                                                                            />}

                                                                        >

                                                                        <VictoryAxis
                                                                tickValues={[1 , 2 , 3 , 4]}
                                                                tickFormat={['Total intentos','Fallos','    Tiempo de respuesta','    Aciertos']}
                                                               />
                                                               <VictoryLegend x={70} y={50}
                                                                 title="General - Sombras"
                                                                 centerTitle
                                                                 orientation="horizontal"
                                                                 style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
                                                                 data={[
                                                                  { name: "Usuario", symbol: { fill: "tomato" },  },
                                                                  { name: "Media diagnosticados", symbol: { fill: "orange" } },

                                                                 ]}
                                                                 />
                                                                          <VictoryLine
                                                                            data={[{ x: 1, y: 5 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 4, y: 2 }]}
                                                                            style={{
                                                                              data: {
                                                                                stroke: "tomato",
                                                                              },
                                                                              labels: { fill: "tomato" }
                                                                            }}
                                                                          />

                                                                          <VictoryLine
                                                                            data={[{ x: 1, y: 4 }, { x: 2, y:4 }, { x: 3, y: 3 }, { x: 4, y: 2 }]}
                                                                            style={{
                                                                              data: {
                                                                                stroke: "orange",

                                                                              },
                                                                              labels: { fill: "orange" }
                                                                            }}
                                                                          />
                                                                        </VictoryChart>

         </View>
</ScrollView>
     );
   }
 }
