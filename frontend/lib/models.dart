class Worker {
  final String id;
  final String firstName;
  final String lastName;
  final String email;

  Worker({
    required this.id,
    required this.firstName,
    required this.lastName,
    required this.email,
  });

  // Add other fields as needed

  factory Worker.fromJson(Map<String, dynamic> json) {
    return Worker(
      id: json['_id'] as String,
      firstName: json['firstName'] as String,
      lastName: json['lastName'] as String,
      email: json['email'] as String,
      // Map other fields here
    );
  }
}
