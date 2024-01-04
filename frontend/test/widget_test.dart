import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
// ignore: depend_on_referenced_packages
import 'package:user_management_system/main.dart';

void main() {
  testWidgets('Navigate to AddWorkerScreen test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that the initial screen is displayed.
    expect(find.text('Add Worker'), findsOneWidget);
    expect(find.text('Edit Worker'), findsNothing);
    expect(find.text('View Worker'), findsNothing);

    // Tap the button to navigate to AddWorkerScreen.
    await tester.tap(find.byType(ElevatedButton));
    await tester.pumpAndSettle(); // Wait for navigation to complete.

    // Verify that AddWorkerScreen is displayed.
    expect(find.text('Add Worker'), findsNothing);
    expect(find.text('Edit Worker'), findsNothing);
    expect(find.text('View Worker'), findsOneWidget);

    // You can further test interactions on the AddWorkerScreen here.

    // Example: Verify the presence of a widget on AddWorkerScreen.
    expect(find.byType(Text), findsWidgets);
    // Add more test cases as needed.
  });
}
