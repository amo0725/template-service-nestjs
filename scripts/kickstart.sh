kickstart() {
  npm install

  npm run env:config set local

  [ ! -f .env ] || export $(grep -v '^#' .env | xargs)

  docker-compose -f docker-compose.local.yaml up -d

  while ! docker exec "$MYSQL_DATABASE-mysql" mysql --user=$MYSQL_USER --password=$MYSQL_PASSWORD -e "status" &> /dev/null ; do
    echo "Waiting for database connection..."
    sleep 10
  done

  npm run migration run local

  npm run start:dev
}

case "$CMD" in
*)
    kickstart
    ;;
esac