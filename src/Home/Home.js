import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import { styles } from './Styles';

const Home = () => {
  useEffect(() => {
    getList();
  }, []);

  const [list, setList] = useState([]);
  const [companySummary, setCompanySummary] = useState("");

  const getList = () => {
    let url = 'https://spacex-production.up.railway.app/'; // api url

    try {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query {
              launchesPast(limit:16) {
                mission_name
                launch_date_local
                links {
                  article_link
                  video_link
                }
                details
              }
              company {
                name
                summary
              }
            }
          `
        })
      })
      .then(response => response.json())
      .then(res => {
        setList(res.data.launchesPast);
        setCompanySummary(res.data.company);
      });
    } catch (error) {
      console.log('Error>>>>', error);
    }
  };

  const renderList = ({ item }) => {
    const launchDateTime = new Date(item.launch_date_local);
    const launchDate = launchDateTime.toLocaleDateString();
    const launchTime = launchDateTime.toLocaleTimeString();

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.missionName}>{item.mission_name}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.launchDate}>Date: {launchDate}</Text>
          <Text style={styles.launchDate}>Time: {launchTime}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.launchDate}>{item.details}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={{ ...styles.button, backgroundColor: '#ffc61a' }}
            onPress={() => {
              if (item.links.article_link) {
                Linking.openURL(item.links.article_link);
              }
            }}
          >
            <Text style={styles.buttonText}>Article Link</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (item.links.video_link) {
                Linking.openURL(item.links.video_link);
              }
            }}
          >
            <Text style={styles.buttonText}>Video Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{companySummary.name}</Text>
      <FlatList
        data={list}
        renderItem={renderList}
        ListHeaderComponent={
          <>
            <Text style={{ ...styles.summaryText, fontSize: 15, color: '#000' }}>Summary</Text>
            <View style={styles.summary} />
            <Text style={styles.summaryText}>{companySummary.summary}</Text>
          </>
        }
      />
    </View>
  );
};

export default Home;
