import { AppRegistry } from "react-native";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from "react-native";
import { useState } from "react";

export default function App(){
    const [primeiroNum, setPrimeiroNum] = useState(0);
    const [segundoNum, setSegundoNum] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar(){
        setResultado(parseFloat(primeiroNum) + parseFloat(segundoNum));
        return setResultado;
    }//fim do somar

    function subtrair(){
        setResultado(parseFloat(primeiroNum) - parseFloat(segundoNum));
        return setResultado;
    }//fim do subtrair

    function multiplicar(){
        setResultado(parseFloat(primeiroNum) * parseFloat(segundoNum));
        return setResultado;
    }

    function dividir(){
        if(parseFloat(segundoNum) <= 0){
            setResultado("Impossivel dividir por zero!");
        }else{
            setResultado(parseFloat(primeiroNum) / parseFloat(segundoNum));
        }
        return setResultado;
    }

    function limpar(){
        setPrimeiroNum(0);
        setSegundoNum(0);
        setResultado(0);
    }

    return(
        <View style={styles.tela}>
            <Text style={styles.tituloProg}>Calculadora</Text>

            <View style={styles.primeiroCampo}>
                <TextInput style={styles.input} value={primeiroNum} onChangeText={novoNum => setPrimeiroNum(novoNum)} placeholder="Informe um número"/>
            </View>

            <View style={styles.segundoCampo}>
                <TextInput style={styles.input} value={segundoNum} onChangeText={novoNum => setSegundoNum(novoNum)} placeholder="Informe um número"/>
            </View>

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={subtrair}>
                    <Text style={styles.texto}>Subtrair</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={multiplicar}>
                    <Text style={styles.texto}>Multiplicar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={dividir}>
                    <Text style={styles.texto}>Dividir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={somar}>
                    <Text style={styles.texto}>Somar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaLimpar}>
                <TouchableOpacity style={styles.botao} onPress={limpar}>
                    <Text style={styles.texto}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaResult}>
                <Text style={styles.textoResult}>{resultado}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela:{
        backgroundColor: "#f3f3f3",
        height: "100%",
        width: "100%",
    },
    tituloProg:{
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: 800,
        color: "#ff7aaf",
    },
    primeiroCampo:{
        backgroundColor: "#d0d0d0",
        borderRadius: 100,
        marginTop: 25,
        margin: 10,
        padding: 10,
        width: "90%",
    },
    segundoCampo:{
        backgroundColor: "#d0d0d0",
        borderRadius: 100,
        marginTop: 5,
        margin: 10,
        padding: 10,
        width: "90%",
    },
    input:{
        textAlign: "center",
        fontSize: 15,
        color: "#ffff",
    },
    botao:{
        marginTop: 20,
        backgroundColor: "#ff7aaf",
        padding: 20,
        alignItens: "center",
        width: "50%",
        borderColor: "#000",
        borderWidth: 1,
    },
    areaBotao:{
        display: "flex",
        flexDirection: "row",
    },
    areaResult:{
        marginTop: 50,
        borderWidth: 2,
        borderColor: "#000",
        width: "100%",
        padding: 50,
    },
    textoResult:{
        color: "#000",
        fontSize: 40,
        textAlign: "center",
    },
    areaLimpar:{
        marginTop: 10,
        width:  785,
    },
    texto:{
        textAlign: "center",
        fontSize: 15,
        color: "#fff",
    },
});

AppRegistry.registerComponent('main',() => App);

