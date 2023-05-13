<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Models\Api\UserModel;
use App\Models\User;
use App\Models\Api\ResponseState;
use Exception;

class UserModelTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_that_fromUser_fills_correct_properties()
    {
        // Arrange
        $user = User::factory()->make([
            'first_name' => 'Test',
            'last_name' => 'Case',
            'username' => 'testcase',
            'email' => 'testcase@sugar.com',
            'dob' => '1973-06-09',
            'license_accepted' => true
        ]);

        // Act
        $userResponseModel = UserModel::fromUser($user);

        // Assert
        $this->assertInstanceOf(UserModel::class, $userResponseModel);
        $this->assertEquals('testcase@sugar.com', $userResponseModel->email);
        $this->assertEquals('Test Case', $userResponseModel->name);
        $this->assertEquals('1973-06-09', $userResponseModel->dob);
        $this->assertEquals(true, $userResponseModel->license_accepted);
        $this->assertEquals('en-US', $userResponseModel->lang);
        $this->assertEquals(ResponseState::Success, $userResponseModel->state);
    }

    // INCORRECT PLACE -> should go to UserFactory unit tests
    public function test_that_fromUser_handles_bad_dob_correctly()
    {
        // Arrange
        $user = User::factory()->make([
            'first_name' => 'Test',
            'last_name' => 'Case',
            'username' => 'testcase',
            'email' => 'testcase@sugar.com',
            'dob' => '9999-99-99',
            'license_accepted' => true
        ]);
        $this->expectException(Exception::class);

        // Act
        $userResponseModel = UserModel::fromUser($user);

        // Assert
        // Nothing to assert
    }

    public function test_that_fromError_fills_correct_properties()
    {
        // Arrange
        $errorMsg = 'Something happened';

        // Act
        $userResponseModel = UserModel::fromError($errorMsg);

        // Assert
        $this->assertInstanceOf(UserModel::class, $userResponseModel);
        $this->assertFalse(isset($userResponseModel->email));
        $this->assertFalse(isset($userResponseModel->name));
        $this->assertFalse(isset($userResponseModel->dob));
        $this->assertFalse(isset($userResponseModel->license_accepted));
        $this->assertFalse(isset($userResponseModel->lang));
        $this->assertEquals(ResponseState::Error, $userResponseModel->state);
        $this->assertEquals($errorMsg, $userResponseModel->message);
    }
}
