import { ChartBarIcon, ClockIcon, StarIcon } from '@heroicons/react/20/solid'
import { doc, getDoc } from "firebase/firestore"
import { useCallback, useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Information from "../components/ProductView/Information"
import InformationItem from "../components/ProductView/InformationItem"
import Badge from "../components/UI/Badge/Badge"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import Skeleton from '../components/UI/Skeleton/Skeleton'
import AuthContext from "../context/authContext"
import { db } from "../firebase"
import { roundToTwo } from '../lib/helpers/roundToTwo'

export default function ProductView(props) {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingImg, setLoadingImg] = useState(true)
  // const [rating, setRating] = useState(5)
  const navigate = useNavigate()

  const fetchRecipe = useCallback (async () => {
    try {
      const docRef = doc(db, "recipes", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        document.title = docSnap.data().name
        setRecipe(docSnap.data())
      } else {
        console.log("No such document!")
        navigate('/')
      }
    } catch (ex) {
      console.log(ex.response)
    }
    setLoading(false)
  }, [id, navigate])

  // TODO: rating system
  /* const rateHotel = async () => {
    try {
      await axios.put(`/recipes/${id}/rating.json?auth=${user.token}`, rating)
      navigate('/')
    } catch (ex) {
      console.log(ex.response)
    }
  } */

  useEffect(() => {
    fetchRecipe()
  }, [fetchRecipe])

  return loading ? <LoadingIcon /> : (
    <div className='mx-4 lg:mx-auto lg:w-max'>
      <div className="grid gap-4 lg:grid-cols-3 lg:w-[60rem] xl:w-[70rem]">
        <div className="flex flex-col gap-3 h-max lg:col-span-2">
          
          <h2 className='text-3xl font-bold dark:text-white'>{recipe.name}</h2>

          <div className="flex gap-2">
            <span className={`px-2.5 py-0.5 w-max inline-flex items-center text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900`}>
              <ClockIcon className="mr-1 w-3 h-3" />{recipe.details.duration} min
            </span>
            <span className={`px-2.5 py-0.5 w-max inline-flex items-center text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900`}>
              <ChartBarIcon className="mr-1 w-3 h-3" />{recipe.details.level}
            </span>
            <span className={`px-2.5 py-0.5 w-max inline-flex items-center text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900`}>
              <StarIcon className="mr-1 w-3 h-3" />{recipe.rating ?? "Brak ocen"}
            </span>
          </div>

          {loadingImg && (
            <div className="w-full h-60 md:h-80 lg:h-96 flex justify-center items-center rounded animate-pulse bg-gray-300 dark:bg-gray-700">
              <Skeleton />
            </div>
          )}

          <img style={{display: loadingImg ? "none" : "block"}} className="w-full h-60 md:h-80 lg:h-96 rounded object-cover object-center" src={recipe.img} onLoad={() => setLoadingImg(false)} alt='Meal preview' />
          
          <p className="text-justify dark:text-gray-400">{recipe.description}</p>
        </div>

        <div className="flex flex-row flex-wrap gap-3 sm:justify-center lg:flex-col lg:sticky lg:top-0">
          <Information theme="bg-amber-600" title="Podstawowe informacje">
            <InformationItem title="Czas całkowity" content={`${recipe.details.duration} minut`} />
            <InformationItem title="Poziom trudności" content={recipe.details.level} />
            <InformationItem title="Liczba porcji" content={recipe.details.portions} />
          </Information>

          <Information theme="bg-rose-700" title="Wartości odżywcze">
            <InformationItem title="Kalorie" content={`${roundToTwo(recipe.nutrions.calories * 4.2)} kJ / ${recipe.nutrions.calories} kcal`} />
            <InformationItem title="Białko" content={`${recipe.nutrions.protein} g`} />
            <InformationItem title="Węglowodany" content={`${recipe.nutrions.carbohydrates} g`} />
            <InformationItem title="Tłuszcz" content={`${recipe.nutrions.fat} g`} />
          </Information>

          <Information theme="bg-blue-700" title="Składniki">
            <ul className="list-disc list-inside italic">
              {recipe.ingredients.map((item, id) => <li key={id}>{item}</li>)}
            </ul>
          </Information>

          {/* <select className="form-control form-select-lg mb-3" value={rating} onChange={e => setRating(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div>
            <input type="radio" name="rate" value="1" className="bg-orange-400" />
            <input type="radio" name="rate" value="2" className="bg-orange-400" />
            <input type="radio" name="rate" value="3" className="bg-orange-400" />
            <input type="radio" name="rate" value="4" className="bg-orange-400" />
            <input type="radio" name="rate" value="5" className="bg-orange-400" />
          </div> */}
        </div>
        
        <div className="my-3 lg:col-span-2 dark:text-white">
          <h3 className='mb-2 text-2xl font-bold'>Wykonanie</h3>
          <ol className="list-decimal list-inside dark:text-gray-400">
            {recipe.steps.map((item, id) => <li key={id} className="mb-3">{item}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}