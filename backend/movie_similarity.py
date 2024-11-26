#construction de la liste des movies similaire à un movie
import sqlite3
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


connection = sqlite3.connect("database.sqlite3")
print(connection.total_changes)
cursor= connection.cursor()
cursor.execute("SELECT * From movie")
rows=cursor.fetchall()
descriptions=[row[len(row)-1] for row in rows]

nltk.download('punkt')
nltk.download('stopwords')

def text_similarity(text1, text2):
    # Tokenize and lemmatize the texts
    tokens1 = word_tokenize(text1)
    tokens2 = word_tokenize(text2)
    lemmatizer = WordNetLemmatizer()
    tokens1 = [lemmatizer.lemmatize(token) for token in tokens1]
    tokens2 = [lemmatizer.lemmatize(token) for token in tokens2]

    # Remove stopwords
    stop_words = stopwords.words('english')
    tokens1 = [token for token in tokens1 if token not in stop_words]
    tokens2 = [token for token in tokens2 if token not in stop_words]

    # Create the TF-IDF vectors
    vectorizer = TfidfVectorizer()
    vector1 = vectorizer.fit_transform(tokens1)
    vector2 = vectorizer.transform(tokens2)

    # Calculate the cosine similarity
    similarity = cosine_similarity(vector1, vector2)

    return similarity
#construction de la matrice de similarité
def similar_movies(i): # i est l'id du movie
    D={}
    for j in len(rows):
        D[j]=text_similarity(rows[i][len(rows[i])-1],rows[j][len(rows[i])-1])
    sorted_dict = sorted(D.items(), key=lambda item: item[1], reverse=True)      

    

