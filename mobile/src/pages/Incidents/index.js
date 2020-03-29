import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { 
    Text, 
    View, 
    Image, 
    TouchableOpacity,
    FlatList 
} from 'react-native';

import api from '../../services/api';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    function navigateToDetails(incident) {
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents() {
        // const response = await api.get('incidents');

        // setIncidents(response.data);
        // setTotal(response.headers['x-total-count']);

        setIncidents([
            {
              "id": 2,
              "title": "Caso 1",
              "description": "Detalhes do Caso",
              "value": 120,
              "ong_id": "71b62f91",
              "name": "APAD",
              "email": "contato@teste.com",
              "whatsapp": "001234123",
              "city": "Rio do Sul",
              "uf": "SC"
            },
            {
              "id": 3,
              "title": "Caso 1",
              "description": "Detalhes do Caso",
              "value": 120,
              "ong_id": "303671f7",
              "name": "APAD2",
              "email": "contato@teste.com",
              "whatsapp": "001234123",
              "city": "Rio do Sul",
              "uf": "SC"
            },
            {
              "id": 4,
              "title": "Caso 2",
              "description": "Detalhes do Caso",
              "value": 120,
              "ong_id": "303671f7",
              "name": "APAD2",
              "email": "contato@teste.com",
              "whatsapp": "001234123",
              "city": "Rio do Sul",
              "uf": "SC"
            },
            {
              "id": 5,
              "title": "Caso 3",
              "description": "Detalhes do Caso",
              "value": 120,
              "ong_id": "303671f7",
              "name": "APAD2",
              "email": "contato@teste.com",
              "whatsapp": "001234123",
              "city": "Rio do Sul",
              "uf": "SC"
            },
            {
              "id": 6,
              "title": "Caso 4",
              "description": "Detalhes do Caso",
              "value": 120,
              "ong_id": "303671f7",
              "name": "APAD2",
              "email": "contato@teste.com",
              "whatsapp": "001234123",
              "city": "Rio do Sul",
              "uf": "SC"
            }
          ])

          setTotal(5)
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um  dos casos abaixo e salve o dia.</Text>

            <FlatList
                style={styles.incidentList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetails(incident)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color='#e02041'/>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}
