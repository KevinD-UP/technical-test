import json, sys
from psycopg2 import connect, Error

try:
    # declare a new PostgreSQL connection object
    conn = connect(
        dbname = "technicaltest",
        user = "",
        host = "",
        password = "",
        # attempt to connect for 3 seconds then raise exception
        connect_timeout = 3
    )

    cur = conn.cursor()
    print ("created cursor object:", cur)

    with open('dataset.json') as data_json:
        data = json.loads(data_json.read())
        for item in data:
            cur.execute("INSERT INTO operations_operation (data) VALUES (%s)", (json.dumps(item, ensure_ascii=False), ))

    print('Insertion terminé')
    conn.commit()
    cur.close()
    conn.close()
except (Exception, Error) as err:
    print ("\npsycopg2 connect error:", err)
    conn = None
    cur = None