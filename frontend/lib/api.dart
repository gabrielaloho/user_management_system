import 'dart:convert';
import 'package:http/http.dart' as http;

class Api {
  static const String baseUrl = 'http://localhost:3000/api/workers';

  static Future<http.Response> addWorker(Map<String, dynamic> data) async {
    final response = await http.post(
      Uri.parse(baseUrl),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    return response;
  }

  static Future<http.Response> editWorker(
      String workerId, Map<String, dynamic> data) async {
    final response = await http.put(
      Uri.parse('$baseUrl/$workerId'),
      headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode(data),
    );
    return response;
  }

  // Add more API functions as needed
}
