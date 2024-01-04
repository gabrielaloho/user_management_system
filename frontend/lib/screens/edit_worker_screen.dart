import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class EditWorkerScreen extends StatefulWidget {
  final String workerId;

  const EditWorkerScreen({super.key, required this.workerId});

  @override
  _EditWorkerScreenState createState() => _EditWorkerScreenState();
}

class _EditWorkerScreenState extends State<EditWorkerScreen> {
  final TextEditingController firstNameController = TextEditingController();
  final TextEditingController lastNameController = TextEditingController();
  final TextEditingController emailController = TextEditingController();

  Future<void> editWorker() async {
    final String apiUrl =
        'http://localhost:3000/api/workers/${widget.workerId}';

    final response = await http.put(
      Uri.parse(apiUrl),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(
        <String, dynamic>{
          'firstName': firstNameController.text,
          'lastName': lastNameController.text,
          'email': emailController.text,
          // Add other fields as needed
        },
      ),
    );

    if (response.statusCode == 200) {
      // Worker edited successfully
      // You can navigate to the view screen or show a success message
    } else {
      // Error editing worker
      // You can show an error message
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Edit Worker'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: firstNameController,
              decoration: const InputDecoration(labelText: 'First Name'),
            ),
            TextField(
              controller: lastNameController,
              decoration: const InputDecoration(labelText: 'Last Name'),
            ),
            TextField(
              controller: emailController,
              decoration: const InputDecoration(labelText: 'Email'),
            ),
            // Add other input fields as needed

            const SizedBox(height: 16.0),

            ElevatedButton(
              onPressed: editWorker,
              child: const Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}
