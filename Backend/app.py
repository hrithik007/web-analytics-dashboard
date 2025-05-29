from flask import Flask                  # Import Flask web framework
from routes.collect import collect_bp     # Import the collect blueprint (routes)
from routes.analytics import analytics_bp # Import the analytics blueprint (routes)
from flask_cors import CORS               # Import CORS to allow frontend requests from different origins
import mysql.connector                    # Import MySQL connector to connect to MySQL DB

app = Flask(__name__)                     # Create Flask app instance
CORS(app)                                 # Enable Cross-Origin Resource Sharing (CORS)



# MySQL configuration
app.config['MYSQL_HOST'] = 'localhost'            # Host where MySQL is running
app.config['MYSQL_USER'] = 'yourusername'         # MySQL username
app.config['MYSQL_PASSWORD'] = 'yourpassword'     # MySQL password
app.config['MYSQL_DB'] = 'webanalytics'           # Name of your database

# Function to return MySQL connection using mysql.connector
def get_mysql_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='MNihj15kfc#',
        database='webanalytics'
    )

app.get_mysql_connection = get_mysql_connection   # Store connection function in app object

# Register the blueprint to main app with a prefix
app.register_blueprint(collect_bp, url_prefix='/api')
app.register_blueprint(analytics_bp, url_prefix='/api')

@app.route('/test-post', methods=['GET'])
def test_post():
    return {'message': 'POST works'}


if __name__ == '__main__':
    app.run(debug=True)

