<script>
    export let rating = "5";
  </script>
  
  <div class="rating rating-lg">
    <input disabled type="radio" class="mask mask-star" checked={rating === "1"} />
    <input disabled type="radio" class="mask mask-star" checked={rating === "2"} />
    <input disabled type="radio" class="mask mask-star" checked={rating === "3"} />
    <input disabled type="radio" class="mask mask-star" checked={rating === "4"} />
    <input disabled type="radio" class="mask mask-star" checked={rating === "5"} />
  </div>