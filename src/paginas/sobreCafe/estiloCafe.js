import { StyleSheet } from "react-native";

const estiloCafe = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9b785d', 
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 32, // Título um pouco maior
        fontWeight: '700', // Mais peso
        color: '#2C3E50', // Cor mais escura para o título
        marginBottom: 30,
        textAlign: 'center',
    },
    cardDetalhes: {
        width: '100%',
        backgroundColor: '#bb9e85',
        borderRadius: 15, // Bordas mais arredondadas
        padding: 25, // Mais padding interno
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 }, // Sombra um pouco mais proeminente
        shadowOpacity: 0.08, // Sombra suave
        shadowRadius: 12,
        elevation: 8,
        alignItems: 'center', // Centraliza itens dentro do card
    },
    imagemCafe: {
        width: '100%', // Imagem ocupando toda a largura do card
        height: 280, // Altura um pouco maior
        borderRadius: 10,
        marginBottom: 25,
        resizeMode: 'cover',
    },
    informacoesBasicas: {
        flexDirection: 'row', // Alinha preço e valor lado a lado
        alignItems: 'baseline', // Alinha pela base do texto
        marginBottom: 20,
        width: '100%',
        justifyContent: 'center', // Centraliza o bloco de preço
    },
    labelPreco: {
        fontSize: 18,
        color: '#7F8C8D', // Um cinza mais suave para o label
        fontWeight: '500',
        marginRight: 8,
    },
    valorPreco: {
        fontSize: 28, // Preço maior e mais impactante
        fontWeight: 'bold',
        color: '#E67E22', // Um tom de laranja/cobre para o preço
    },
    secaoDescricao: {
        width: '100%',
    },
    labelDescricao: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#34495E', // Cor mais escura para o label da descrição
        marginBottom: 10,
    },
    textoDescricao: {
        fontSize: 16,
        color: '#555555',
        lineHeight: 25,
        textAlign: 'justify',
    },
})

export default estiloCafe;