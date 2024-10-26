// CourseScreen.tsx
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';

interface Course {
  id: number;
  name: string;
  content: string | string[];
  fee: number;
  duration: string; // Added duration property to display course duration
}

const courses = {
  sixWeeks: [
    { id: 1, name: "Child minding", content: [
      "• birth to six-month old baby needs",
      "• seven-month to one year old needs",
      "• Toddler needs",
      "• Educational toys"
    ], fee: 750, duration: "6 Weeks" },
    { id: 2, name: "Cooking", content: [
      "• Nutritional requirements for a healthy body",
      "• Types of protein, carbohydrates and vegetables",
      "• Planning meals",
      "• Preparation and cooking of meals"
    ], fee: 750, duration: "6 Weeks" },
    { id: 3, name: "Garden maintenance", content: [
      "• Water restrictions and the watering requirements of indigenous and exotic plants",
      "• Pruning and propagation of plants",
      "• Planting techniques for different plant types"
    ], fee: 750, duration: "6 Weeks" },
  ],
  sixMonths: [
    { id: 4, name: "First Aid", content: [
      "• Wounds and bleeding",
      "• Burns and fractures",
      "• Emergency scene management",
      "• Cardio-Pulmonary Resuscitation (CPR)",
      "• Respiratory distress e.g., Choking, blocked airway"
    ], fee: 1500, duration: "6 Months" },
    { id: 5, name: "Sewing", content: [
      "• Types of stitches",
      "• Threading a sewing machine",
      "• Sewing buttons, zips, hems and seams",
      "• Alterations",
      "• Designing and sewing new garments"
    ], fee: 1500, duration: "6 Months" },
    { id: 6, name: "Landscaping", content: [
      "• Indigenous and exotic plants and trees",
      "• Fixed structures (fountains, statues, benches, tables, built-in braai)",
      "• Balancing of plants and trees in a garden",
      "• Aesthetics of plant shapes and colours",
      "• Garden layout"
    ], fee: 1500, duration: "6 Months" },
    { id: 7, name: "Life Skills", content: [
      "• Opening a bank account",
      "• Basic labour law (know your rights)",
      "• Basic reading and writing literacy",
      "• Basic numeric literacy"
    ], fee: 1500, duration: "6 Months" },
  ],
};

const CourseScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<Course[]>([]);

  // Filter courses based on search term
  const filteredCourses = [...courses.sixWeeks, ...courses.sixMonths].filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add course to cart
  const addToCart = (course: Course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  // Remove course from cart
  const removeFromCart = (courseId: number) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  };

  const courseCount = cart.length;

  // Calculate discount
  let discount = 0;
  if (courseCount === 2) discount = 0.05;
  else if (courseCount === 3) discount = 0.1;
  else if (courseCount > 3) discount = 0.15;

  const total = cart.reduce((sum, course) => sum + course.fee, 0);
  const discountedTotal = total - total * discount;

  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <Image source={require('./logo.png')} style={styles.logo} />

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search courses..."
        placeholderTextColor="#999"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />

      {/* Course List */}
      {filteredCourses.map((course) => (
        <View key={course.id} style={styles.courseItem}>
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDuration}>{course.duration}</Text> {/* Display course duration */}
          <Text style={styles.courseContent}>{course.content}</Text>
          <Text style={styles.courseFee}>Fee: R{course.fee}</Text>
          <TouchableOpacity onPress={() => addToCart(course)} style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Cart and Checkout Summary */}
      <View style={styles.checkoutSummary}>
        <Text style={styles.checkoutTitle}>Checkout Summary</Text>
        {cart.length > 0 ? (
          cart.map((course) => (
            <View key={course.id} style={styles.cartItem}>
              <Text style={styles.cartCourseName}>{course.name}</Text>
              <Text style={styles.cartCourseFee}>Fee: R{course.fee}</Text>
              <TouchableOpacity onPress={() => removeFromCart(course.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty.</Text>
        )}

        <Text style={styles.checkoutInfo}>Number of courses: {courseCount}</Text>
        <Text style={styles.checkoutInfo}>Discount: {discount * 100}%</Text>
        <Text style={styles.checkoutInfo}>Total: R{total.toFixed(2)}</Text>
        <Text style={styles.checkoutInfo}>Total after discount: R{discountedTotal.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

export default CourseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  courseItem: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDuration: { // New style for course duration
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 5,
  },
  courseContent: {
    marginTop: 5,
  },
  courseFee: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  addButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutSummary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartCourseName: {
    fontSize: 16,
  },
  cartCourseFee: {
    fontWeight: 'bold',
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyCartText: {
    fontStyle: 'italic',
    color: '#888',
  },
  checkoutInfo: {
    fontSize: 16,
    marginTop: 5,
  },
});
