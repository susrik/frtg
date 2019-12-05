import frtg
import logging

logging.basicConfig(level=logging.DEBUG)

app = frtg.create_app()
app.run(host='::', port='19191')
