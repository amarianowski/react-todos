export default function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <div class="d-flex">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <p>We are loading your page</p>
    </div>
  );
}
