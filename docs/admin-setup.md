# Configuração do Primeiro Administrador

Este documento descreve o procedimento para conceder privilégios administrativos ao primeiro usuário do sistema MovaFin. Por razões de segurança, este processo é realizado externamente à aplicação para evitar vetores de ataque em funcionalidades de cadastro público.

## Método 1: Via Firestore (Abordagem Simples)

Este método utiliza um campo no documento do usuário dentro do Firestore para identificar o papel administrativo.

1. Acesse o [Firebase Console](https://console.firebase.google.com/).
2. Selecione o seu projeto **MovaFin**.
3. No menu lateral, vá em **Build** > **Firestore Database**.
4. Localize a coleção `users` (criada após o primeiro login/cadastro).
5. Encontre o documento correspondente ao usuário que você deseja tornar administrador (verifique pelo campo `email`).
6. Adicione (ou edite) o seguinte campo no documento:
   - **Nome do campo:** `role`
   - **Tipo:** `string`
   - **Valor:** `admin`
7. Clique em **Salvar**.

A aplicação está configurada para verificar este campo e liberar o acesso às funcionalidades de administração.

## Método 2: Via Custom Claims (Abordagem Profissional)

Custom Claims são gravados diretamente no token de autenticação (ID Token) do Firebase, sendo a forma mais segura e performática de gerenciar permissões.

1. Para definir o primeiro admin, você pode usar um script Node.js local com o `firebase-admin` SDK.
2. Certifique-se de ter as credenciais do seu projeto (Service Account JSON).
3. Execute o comando abaixo (exemplo conceitual):

```javascript
const admin = require('firebase-admin');
const serviceAccount = require("./caminho/para/sua/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const uid = 'UID_DO_USUARIO_AQUI'; // Obtenha o UID no console do Firebase Auth

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('Sucesso: Usuário agora é um administrador.');
    process.exit();
  })
  .catch(error => {
    console.error('Erro ao definir claims:', error);
  });
```

4. O usuário precisará fazer **logout e login novamente** para que o novo token com as permissões seja carregado pelo navegador.

---

**Importante:** Nunca exponha chaves de Service Account no repositório de código. Este procedimento deve ser feito apenas por desenvolvedores com acesso ao console do projeto.