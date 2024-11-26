import sqlite3
import movie_similarity
from movie_similarity import similar_movies
x=1
connection = sqlite3.connect("database.sqlite3")
print(connection.total_changes)
cursor= connection.cursor()
cursor.execute('SELECT movieId FROM rating WHERE userId=x AND score=1')
rows=cursor.fetchall()
cursor.execute('SELECt * FROM movie')
L=cursor.fetchall()
#construction de la liste des movies à recommender
recommended=[]
i=0
while len(recommended)<len(L):
    recommended.append(similar_movies(rows[i][0]))
    i=i+1
recommended_Str = ' '.join([str(elem) for elem in recommended])   
cursor.execute('INSERT INTO user (recommend) VALUES ( recommended)')    