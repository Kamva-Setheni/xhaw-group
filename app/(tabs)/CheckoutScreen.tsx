// Checkout.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Checkout = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* User Information */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your surname"
        value={surname}
        onChangeText={setSurname}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      {/* Payment Information */}
      <Text style={styles.label}>Payment Method</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter payment method details"
        value={paymentMethod}
        onChangeText={setPaymentMethod}
      />

      <TouchableOpacity style={styles.button} onPress={() => { /* No action on press */ }}>
        <Text style={styles.buttonText}>Proceed with Payment</Text>
      </TouchableOpacity>

      {/* Company Contact Details */}
      <View style={styles.companyDetails}>
        <Text style={styles.contactTitle}>Company Contact Information</Text>
        <Text style={styles.contactText}>Phone: +123 456 7890</Text>
        <Text style={styles.contactText}>Email: info@company.com</Text>
        <Text style={styles.contactText}>Address: 1234 Main Street, City, Country</Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  companyDetails: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
});
