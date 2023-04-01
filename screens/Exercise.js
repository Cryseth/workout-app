import {useCallback} from "react";

const Exercise = ({route}) => {
    const isFocused = useIsFocused();

    const [exercise, setExercise] = useState(route.params.item);
    const [exerciseTime, setExerciseTime] = useState(route.params.item.time);
    const [exerciseSeconds, setExerciseSeconds] = useState(exerciseTime * 60);
    const [isRest, setIsRest] = useState(false);
    const [restTime, setRestTime] = useState(route.params.rest);
    const [restSeconds, setRestSeconds] = useState(restTime * 60);
    const [isStarted, setIsStarted] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentSet, setCurrentSet] = useState(1);
    const [completedSets, setCompletedSets] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const [sound, setSound] = useState();
    const [volume, setVolume] = useState(1);
    const [audioUri, setAudioUri] = useState();

    const [progressData, setProgressData] = useState([]);
    const [isProgressSaved, setIsProgressSaved] = useState(false);

    const loadProgressData = useCallback(async () => {
        try {
            const value = await AsyncStorage.getItem(`@progress_${exercise.id}`);
            if (value !== null) {
                setProgressData(JSON.parse(value));
                setIsProgressSaved(true);
            }
        } catch (error) {
            console.log('Error loading progress data: ', error);
        }
    }, [exercise.id]);

    const saveProgressData = useCallback(async () => {
        try {
            await AsyncStorage.setItem(`@progress_${exercise.id}`, JSON.stringify(progressData));
            setIsProgressSaved(true);
        } catch (error) {
            console.log('Error saving progress data: ', error);
        }
    }, [exercise.id, progressData]);

    const clearProgressData = useCallback(async () => {
        try {
            await AsyncStorage.removeItem(`@progress_${exercise.id}`);
            setIsProgressSaved(false);
            setProgressData([]);
        } catch (error) {
            console.log('Error clearing progress data: ', error);
        }
    }, [exercise.id]);

    const loadAudio = useCallback(async () => {
        try {
            const {sound} = await Audio.Sound.createAsync(
                {uri: audioUri},
                {shouldPlay: false, volume}
            );
            setSound(sound);
        } catch (error) {
            console.log('Error loading audio: ', error);
        }
    }, [audioUri, volume]);

    useEffect(() => {
        if (isFocused) {
            if (exercise.audioUri) {
                setAudioUri(exercise.audioUri);
            }
            if (exercise.time) {
                setExerciseSeconds(exercise.time * 60);
            }
            if (restTime) {
                setRestSeconds(restTime * 60);
            }
            setCurrentSet(1);
            setCompletedSets([]);
            setIsDone(false);
            setIsStarted(false);
            setIsPaused(false);
            setProgressData([]);
            setIsProgressSaved(false);
            loadProgressData();
        }
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [isFocused, exercise.audioUri, exercise.time, restTime, sound, loadProgressData]);


    useEffect(() => {
        loadAudio();
    }, [audioUri, loadAudio]);

};
export default Exercise;
