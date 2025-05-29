from flask import Blueprint, request, jsonify, current_app  # Import Flask modules
import datetime                                              # To get current timestamp

collect_bp = Blueprint('collect', __name__)  # Define a blueprint for the /collect route

@collect_bp.route('/collect', methods=['POST'])
def collect():
    ip = request.remote_addr                       # Get the user's IP address
    timestamp = datetime.datetime.now().isoformat()  # Get current timestamp in ISO format
    
    conn = current_app.get_mysql_connection()     # Get a new DB connection
    cur = conn.cursor()                           # Get a cursor to execute SQL
    cur.execute("INSERT INTO traffic (ip, timestamp) VALUES (%s, %s)", (ip, timestamp))  # Insert IP and time
    conn.commit()                                 # Save the changes
    cur.close()                                   # Close cursor
    conn.close()                                  # Close connection

    return jsonify({'status': 'success', 'ip': ip, 'timestamp': timestamp})  # Return response
