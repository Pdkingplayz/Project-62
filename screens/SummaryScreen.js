import * as React from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import db from '../config';

class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  resetDb = () => {
    var restDatabase = db.ref('/').set({
      '01': {
        name: 'Slappy',
        roll_no: 1,
      },
      '02': {
        name: 'Frizzy Goblet',
        roll_no: 2,
      }
    });
  };

  componentDidMount = async () => {
    var today = this.getTodaysDate();

    var students_ref = db.ref('/').on('value', (data) => {
      var class_a = data.val();
      var present_students = [];
      var absent_students = [];
      for (var i in class_a) {
        if (class_a[i][today] === 'present') {
          present_students.push(class_a[i]);
        }
        if (class_a[i][today] === 'absent') {
          absent_students.push(class_a[i]);
        }
      }

      present_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      absent_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students: present_students,
        absent_students: absent_students,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Present Students</Text>
        <View style={styles.presentContainer}>
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <Text style={styles.title}>Absent Students</Text>

        <View style={styles.absentContainer}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.name}</Text>
          ))}
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            fontWeight:'bold'
          }}>
          <Text>Present: {this.state.present_students.length}</Text>
          <Text>Absent: {this.state.absent_students.length}</Text>
        </View>

        <View style = {{position:'relative', top:111}}>
          <Button
          title="RESET"
          color="blue"
          style={{ width: 100, height: 100 }}
          onPress={this.resetDb}
        />

        <Button title = "back" 
          color="red"
          style={{ width: 100, height: 100 }}

          onPress={() => {
            this.props.navigation.navigate('HomeScreen');
          }} />
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  absentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding:10,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default SummaryScreen;
