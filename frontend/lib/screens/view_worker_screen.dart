import 'package:flutter/material.dart';
import '../models.dart';

class ViewWorkerScreen extends StatelessWidget {
  final String workerId;

  const ViewWorkerScreen({super.key, required this.workerId});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('View Worker'),
      ),
      body: FutureBuilder(
        // Assume you have a method to fetch worker details based on workerId
        // Modify this part based on your actual implementation
        future: fetchWorkerDetails(workerId),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          } else {
            final worker = snapshot.data as Worker;

            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('First Name: ${worker.firstName}'),
                Text('Last Name: ${worker.lastName}'),
                Text('Email: ${worker.email}'),
                // Add other fields as needed
              ],
            );
          }
        },
      ),
    );
  }

  Future<Worker> fetchWorkerDetails(String workerId) async {
    // Fetch worker details using workerId
    // Replace this with your actual API call or data retrieval logic
    // Example:
    // final response = await http.get('http://localhost:3000/api/workers/$workerId');
    // final data = json.decode(response.body);
    // return Worker.fromJson(data);

    return Worker(
      id: workerId,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    );
  }
}
