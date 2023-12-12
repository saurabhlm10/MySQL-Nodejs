1.  Start MySQL Server:

    If the MySQL server isn't already running, you can start it using the command:

        brew services start mysql

2.  Access MySQL Command Line:

    Open your terminal and log in to MySQL:

        mysql -u root -p

3.  Create a New Database:

    Once logged in, create a new database with:

        CREATE DATABASE your_database_name;

4.  Create a New User (Optional but Recommended):

    For security, it's advisable to create a new user for your application:

        CREATE USER 'new_user'@'localhost' IDENTIFIED BY 'password';
        GRANT ALL PRIVILEGES ON your_database_name.* TO 'new_user'@'localhost';
        FLUSH PRIVILEGES;

5.  Change User's Authentication Method: Execute the following SQL command, replacing your_username with your actual username:

        ALTER USER 'your_username'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'your_password';
        FLUSH PRIVILEGES;
