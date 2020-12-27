import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {format} from 'date-fns';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const {data: projects} = await api.get('projects');

    setProjects(projects);
  }

  async function addProject() {
    const date = format(new Date(), 'dd/MM/yyyy hh:mm:ss');
    const title = `Novo projeto - ${date}`;
    const owner = 'José Veiga';

    const {data: project} = await api.post('projects', {title, owner});
    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"></StatusBar>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item: project}) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.6}
          onPress={addProject}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    padding: 20,
  },

  project: {
    color: '#FFF',
    fontSize: 20,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
