
login = async () => {
  const link = 'http://3.14.172.179:8000/usuarios/login/'+`${this.state.username}` + '.' + `${this.state.password}`;

      this.setState({responser: link}),

  axios.get(link)
    .then(function (response) {
      this.setState({responser: response.status}),
      this.setState({dataSource: response.data}),
      global.usuario= this.state.dataSource[0].nombreUsuario;
      global.id = this.state.dataSource[0].id;
      global.email = this.state.dataSource[0].email;
      global.rol = this.state.dataSource[0].rol;
      global.edad = this.state.dataSource[0].edad;
      global.completado = this.state.dataSource[0].completado;
      global.detectado = this.state.dataSource[0].detectado;
      global.fecha = this.state.dataSource[0].fecha;
      global.diagnostico = this.state.dataSource[0].diagnostico;
      if(global.rol > 0){
        this.props.navigation.navigate('loginpro');
      }else{
        this.props.navigation.navigate('login');
      }

      // handle success
      console.log(response);
    }.bind(this))
    .catch(function (error) {
    this.setState({responser: 'error'}),
        Alert.alert('Autentificación','Lo sentimos, el usuario y/o la contraseña es incorrecta'),
     console.log(error);
}.bind(this))

}

registro = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/register/'+`${this.state.name}`+'.'+`${this.state.adress}`+'.'+`${this.state.password}`+'.'+`${this.state.username}`+'.'+`${'nada'}`+'.'+`${'nada'}`+'.'+`${this.state.email}`;
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status})
          if(this.state.rol > 0){
          this.props.navigation.navigate('loginpro');
        }else{
          this.props.navigation.navigate('login');
        }
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
            Alert.alert('Autentificación',link)
         console.log(error);
 }.bind(this))

    }

completado = async () => {
        const link = 'http://3.14.172.179:8000/usuarios/completado/'+`${this.state.id}`;
            this.setState({responser: link}),
        axios.get(link)
          .then(function (response) {
            this.setState({responser: response.status}),
            // handle success
            console.log(response);
          }.bind(this))
          .catch(function (error) {
          this.setState({responser: 'error'}),
           console.log(error);
   }.bind(this))
  }

detectado = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/detectado/'+`${this.state.id}`;
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
         console.log(error);
 }.bind(this))
}

diagnosticado = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/diagnosticado/'+`${this.state.id}`;
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
         console.log(error);
 }.bind(this))
}

casos = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/detectados';
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
         console.log(error);
 }.bind(this))
}

addpartida = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/addpartida/'+`${this.state.name}`+'.'+`${this.state.adress}`+'.'+`${this.state.password}`;
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
         console.log(error);
 }.bind(this))
}

recuperarusuario = async () => {
        const link = 'http://3.14.172.179:8000/usuarios/recuperar/'+`${this.state.password}`;
            this.setState({responser: link}),
        axios.get(link)
          .then(function (response) {
            this.setState({responser: response.status}),
            // handle success
            console.log(response);
          }.bind(this))
          .catch(function (error) {
          this.setState({responser: 'error'}),
           console.log(error);
   }.bind(this))
  }


addperfil = async () => {
          const link = 'http://3.14.172.179:8000/usuarios/perfiles/'+`${this.state.name}`+'.'+`${this.state.adress}`;
              this.setState({responser: link}),
          axios.get(link)
            .then(function (response) {
              this.setState({responser: response.status}),
              // handle success
              console.log(response);
            }.bind(this))
            .catch(function (error) {
            this.setState({responser: 'error'}),
             console.log(error);
     }.bind(this))
    }

perfiles = async () => {
      const link = 'http://3.14.172.179:8000/usuarios/perfiles/'+`${this.state.name}`;
          this.setState({responser: link}),
      axios.get(link)
        .then(function (response) {
          this.setState({responser: response.status}),
          // handle success
          console.log(response);
        }.bind(this))
        .catch(function (error) {
        this.setState({responser: 'error'}),
         console.log(error);
 }.bind(this))
}

datospartida = async () => {
          const link = 'http://3.14.172.179:8000/usuarios/partida/'+`${this.state.name}`;
              this.setState({responser: link}),
          axios.get(link)
            .then(function (response) {
              this.setState({responser: response.status}),
              // handle success
              console.log(response);
            }.bind(this))
            .catch(function (error) {
            this.setState({responser: 'error'}),
             console.log(error);
     }.bind(this))
    }

    mediapartidas = async () => {
              const link = 'http://3.14.172.179:8000/usuarios/media';
                  this.setState({responser: link}),
              axios.get(link)
                .then(function (response) {
                  this.setState({responser: response.status}),
                  // handle success
                  console.log(response);
                }.bind(this))
                .catch(function (error) {
                this.setState({responser: 'error'}),
                 console.log(error);
         }.bind(this))
        }
