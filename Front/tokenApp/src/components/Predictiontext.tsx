export default function PredictionText({ prediction }: { prediction: string }) {
    return (
        <div>
            <p className="mini_title prediction">"{prediction}"</p>
            <p>You got 50 KOPI</p>
        </div>
    )
}