import XCTest
@testable import BoringSSL

final class BoringSSLTests: XCTestCase {
    func testExample() throws {
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct
        // results.
        XCTAssertEqual(BoringSSL().text, "Hello, World!")
    }
}
