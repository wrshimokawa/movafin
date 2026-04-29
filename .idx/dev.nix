{ pkgs, ... }: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.firebase-tools
  ];
  idx = {
    extensions = [
      "sswg.beam"
    ];
    workspace = {
      onCreate = {
        npm-install = "npm install";
      };
      onStart = {
        # Inicia os emuladores em background quando o ambiente inicia
        # Note: O comando usa --import para persistir dados se necessário futuramente
        firebase-emulators = "firebase emulators:start --only auth,firestore";
      };
    };
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };
}
