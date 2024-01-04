import 'package:flutter/material.dart';
import '../api.dart';

class AddWorkerScreen extends StatelessWidget {
  const AddWorkerScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Add Worker'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () async {
            final Map<String, dynamic> workerData = {
              'firstName': 'John',
              'lastName': 'Doe',
              'email': 'john.doe@example.com',
              // Add other fields as needed
            };

            final response = await Api.addWorker(workerData);

            if (response.statusCode == 201) {
              // Handle the newly added worker as needed
            } else {
              // Handle errors
              print(
                  'Failed to add worker. Status code: ${response.statusCode}');
            }
          },
          child: const Text('Add Worker'),
        ),
      ),
    );
  }
}
