from flask import Blueprint, jsonify, current_app  # Import modules

analytics_bp = Blueprint('analytics', __name__)    # Define blueprint for analytics routes

@analytics_bp.route('/traffic', methods=['GET'])
def get_traffic():
    conn = current_app.get_mysql_connection()   # Get DB connection
    cur = conn.cursor(dictionary=True)          # Get cursor that returns results as dictionaries
    cur.execute("SELECT * FROM traffic ORDER BY timestamp DESC")  # Fetch all traffic data
    traffic_data = cur.fetchall()               # Fetch all rows
    cur.close()                                 # Close cursor
    conn.close()                                # Close connection

    return jsonify(traffic_data)                # Return data as JSON

